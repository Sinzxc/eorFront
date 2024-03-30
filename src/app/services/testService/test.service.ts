import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient, private router: Router) {
    console.log('Testing');
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/signin', data).pipe(
      catchError(this.handleError.bind(this)) // Use bind to maintain the context
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Handle client-side or network errors
      console.error('An error occurred:', error.error.message);
    } else {
      // Handle backend errors
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
      // switch(error.status) {
      //   case 401:
      //     this.router.navigate(['/login']);
      //     break;
      //   case 403:
      //     this.router.navigate(['/forbidden']);
      //     break;
      //   case 404:
      //     this.router.navigate(['/not-found']);
      //     break;
      //   case 500:
      //     this.router.navigate(['/server-error']);
      //     break;
      //   default:
      //     this.router.navigate(['/server-error']);
      //     break;
      // }
    }
    return throwError('Error');
  };
}
