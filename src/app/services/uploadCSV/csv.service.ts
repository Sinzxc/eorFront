import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const BASE_URL = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class CSVService {

  constructor(private http: HttpClient) { }

  // AddUsersCSV(file: File) {
  //   console.log(file)
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   return this.http.post<any>('/user/addUsersCSV', formData);
  // }
  AddUsersCSV(file:File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(BASE_URL+"/user/addUsersCSV",formData).subscribe(data => {
      console.log(data);
    })
  }
}
