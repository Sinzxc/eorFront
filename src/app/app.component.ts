import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StudentService } from './services/studentService/student-service.service';
import { TokenStorageService } from './services/tokenService/token-storage.service';
import { Person } from './model/Person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'EER';
  user?:Person;
  currentRoute?: string;

  _isAdmin:boolean = false;
  get isAdmin(): boolean {
    return this._isAdmin
  }

  ngOnInit(): void {
    
  }
  constructor(private router: Router,
    private studentService: StudentService,
    private tokenStorage:TokenStorageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
    this.getUser()
    this._isAdmin=tokenStorage.getUser().role=="admin";
    console.log(this.isAdmin);
  }

  async getUser(){
    const response = await this.studentService.getStudent(this.tokenStorage.getUser().userId).toPromise(); 

    if (response) {
      const responseObject: Person = response;
      this.user = responseObject;
    } else {
      console.error('Response data not found');
    }
  }
}