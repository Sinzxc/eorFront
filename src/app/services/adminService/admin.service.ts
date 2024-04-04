import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/User';
import { Subject} from '../../model/Subject';
import { Group} from '../../model/Group';

const BASE_URL = 'http://192.168.50.206:3000/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
   }

  getAllUsers(): Observable<User[]> {
    return this.http.post<User[]>(BASE_URL+"/user/getAllUsers", httpOptions)
  }
  getAllSubjects(): Observable<Subject[]> {
    return this.http.post<Subject[]>(BASE_URL+"/user/getAllSubjects", httpOptions)
  }
  getAllGroups(): Observable<Group[]> {
    return this.http.post<Group[]>(BASE_URL+"/user/getAllGroups", httpOptions)
  }

  registerUser(username: string, password: string,name:string,sname:string){
    return this.http.post<Response>(BASE_URL+"/auth/signup",{username,password,name,sname}, httpOptions)
  }

  updateUser(mainUsername:string, username: string, password: string,name:string,sname:string){
    return this.http.post<Response>(BASE_URL+"/user/updateUser",{mainUsername,username,password,name,sname}, httpOptions)
  }
}
