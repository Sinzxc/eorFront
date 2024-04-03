import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/User';

const BASE_URL = 'http://192.168.0.102:3000/api';

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

  registerUser(username: string, password: string){
    return this.http.post(BASE_URL+"/auth/signup",{username,password}, httpOptions)
  }
}
