import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../model/Person';

const BASE_URL = 'http://192.168.0.104:3000/api/user/getUser';

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
    return this.http.post<Person>(BASE_URL,{userId}, httpOptions)
  }
}
