import { Inject, Injectable, InjectionToken } from '@angular/core';
import { StudentService } from './studentService/student-service.service';
import { Observable } from 'rxjs';
import { Person} from './../model/Person';
import { catchError, filter, map, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private studentService: StudentService) { }
  private _studentData!: Person;
  private _userId: string = "6609cb9ed1f6e9ef5f24aa5a"

  // public getStudentData(_userId:string): Observable<Person | null> {
  //   if (this._studentData) {
  //     return of(this._studentData);
  //   } else {
  //     return this.studentService.getPerson(_userId).pipe(
  //       map(data => {
  //         this._studentData = data;
  //         return this._studentData;
  //       }),
  //       catchError(err => {
  //         console.error('Error fetching student data: ', err);
  //         return of(null);
  //       })
  //     );
  //   }
  // }
}
