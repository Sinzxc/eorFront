import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group} from '../../model/Group';
import { TimeTableItem } from '../../model/TimeTableItem';

const BASE_URL = 'http://192.168.20.206:3000/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) {
  }

  getTimeTable(date:string,group:string): Observable<TimeTableItem[]> {
    return this.http.post<TimeTableItem[]>(BASE_URL+"/user/publicGetLesson",{date,group}, httpOptions)
  }

  getAllGroups(): Observable<Group[]> {
    return this.http.post<Group[]>(BASE_URL+"/user/getAllGroups", httpOptions)
  }

  getCurrentGroup(user: string): Observable<string> {
    return this.http.post<string>(BASE_URL + "/user/getCurrentGroup", { user }, httpOptions);
}

}
