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
  profileImageHref:string='';
  _isAdmin:boolean = false;
  get isAdmin(): boolean {
    return this._isAdmin
  }

  ngOnInit(): void {
    
  }
  async getAvatar(){
    const username = await this.studentService.getUsername(this.tokenStorage.getUser()).subscribe(username =>
      this.profileImageHref = 'https://api.dicebear.com/8.x/identicon/svg?seed='+username
    )
    console.log(this.profileImageHref)
  }
  constructor(private router: Router,
    private studentService: StudentService,
    private tokenStorage:TokenStorageService) {
    this.getAvatar()
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
    this.getUser()
    this._isAdmin=tokenStorage.getUser().role=="admin";
   
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