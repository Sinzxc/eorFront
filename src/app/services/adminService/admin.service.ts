import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/User';
import { Subject} from '../../model/Subject';
import { Group} from '../../model/Group';
import { Person } from '../../model/Person';
import { TimeTableItem } from '../../model/TimeTableItem';

const BASE_URL = 'http://192.168.0.100:3000/api';

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

  registerUser(username: string, password: string,name:string,sname:string,group:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/auth/signup",{username,password,name,sname,group}, httpOptions)
  }

  updateUser(mainUsername:string, username: string, password: string,name:string,sname:string,groupId:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/user/updateUser",{mainUsername,username,password,name,sname,groupId}, httpOptions)
  }

  deleteUser(username:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/user/deleteUser",{username}, httpOptions)
  }

  createSubject(name:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/user/addSubject",{name}, httpOptions)
  }

  updateSubject(name:string,mainName:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/user/updateSubject",{name,mainName}, httpOptions)
  }

  deleteSubject(name:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/user/deleteSubject",{name}, httpOptions)
  }
  createGroup(name:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/user/addGroup",{name}, httpOptions)
  }

  updateGroup(name:string,mainName:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/user/updateGroup",{name,mainName}, httpOptions)
  }

  deleteGroup(name:string):Observable<Response>{
    return this.http.post<Response>(BASE_URL+"/user/deleteGroup",{name}, httpOptions)
  }

  getAllTeachers(): Observable<Person[]> {
    return this.http.post<Person[]>(BASE_URL+"/user/getTeachers", httpOptions)
  }

  addLesson(subject:string,name:string,sname:string,date:string,pareNumber:string,classNumber:string,group:string):Observable<Response> {
    return this.http.post<Response>(BASE_URL+"/user/addLesson",{subject,name,sname,date,pareNumber,classNumber,group}, httpOptions)
  }

  getLesson(group:string,date:string):Observable<TimeTableItem[]> {
    return this.http.post<TimeTableItem[]>(BASE_URL+"/user/getLesson",{group,date}, httpOptions)
  }
}
