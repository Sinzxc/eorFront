import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
    console.log('Testing');
  }
  fetchData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/2');
  }
}
