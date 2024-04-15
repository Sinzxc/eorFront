import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../model/Person';
import { User } from '../../model/User';

const BASE_URL = 'http://192.168.20.206:3000/api/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  // getPerson(userId: string): Observable<Person>{
  //   const url = `${BASE_URL}`;
  //   return this.http.post<Person>(url, {userId}, httpOptions);
  // }

  getStudent(userId: string): Observable<Person> {
    return this.http.post<Person>(BASE_URL+'/getUser',{userId}, httpOptions)
  }

  getUsername(user:User): Observable<string> {
    return this.http.post<string>(BASE_URL + "/getUsername", { user }, httpOptions);
  }

}
