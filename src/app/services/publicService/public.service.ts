import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group} from '../../model/Group';
import { TimeTableItem } from '../../model/TimeTableItem';
import { Person } from '../../model/Person';
import { User } from '../../model/User';
import { Subject } from '../../model/Subject';
import { JournalItem } from '../../model/JournalItem';

const BASE_URL = 'http://localhost:3000/api';
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
    return this.http.post<TimeTableItem[]>(BASE_URL+"/public/publicGetLesson",{date,group}, httpOptions)
  }

  getAllGroups(): Observable<Group[]> {
    return this.http.post<Group[]>(BASE_URL+"/public/getAllGroups", httpOptions)
  }

  getAllSubjects(): Observable<Subject[]> {
    return this.http.post<Subject[]>(BASE_URL+"/public/getAllSubjects", httpOptions)
  }

  getCurrentGroup(user: string): Observable<string> {
    return this.http.post<string>(BASE_URL + "/public/getCurrentGroup", { user }, httpOptions);
  }

  getStudent(userId: string): Observable<Person> {
    return this.http.post<Person>(BASE_URL+'/public/getUser',{userId}, httpOptions)
  }

  getUsername(user:string): Observable<string> {
    return this.http.post<string>(BASE_URL + "/public/getUsername", { user }, httpOptions);
  }

  getScores(search:string,date:Date,subject:Subject,group:Group): Observable<JournalItem[]> {
    return this.http.post<JournalItem[]>(BASE_URL + "/public/getScores", { search,date,subject,group }, httpOptions);
  }
  getPagesCount(search:string,date:Date,subject:Subject,group:Group): Observable<number> {
    return this.http.post<number>(BASE_URL + "/public/getScoresPagesCount", { search,date,subject,group }, httpOptions);
  }

}
