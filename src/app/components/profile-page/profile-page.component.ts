import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';
import { Person } from '../../model/Person';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicService } from '../../services/publicService/public.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private publicService: PublicService,
    private http: HttpClient
  ) {}

  user?:Person;
  roleId=this.tokenStorage.getUser().role;
  role?:string;
  profileImageHref?:string;
  async ngOnInit(): Promise<void> {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']);
      return;
    }
    const response = await this.publicService.getStudent(this.tokenStorage.getUser().userId).toPromise(); 
    if (response) {
      const responseObject: Person = response;
      this.user = responseObject;
    } else {
      console.error('Response data not found');
    }
    switch(this.roleId){
      case  "user":this.role= "Студент"; break;
      case  "teacher":this.role= "Преподаватель"; break;
      case  "admin":this.role= "Администратор"; break;
      default:this.role= "unknown"; break;
    }
    this.getAvatar()
}
async getAvatar(){
  const username = await this.publicService.getUsername(this.tokenStorage.getUser().userId).subscribe(username =>
    this.profileImageHref = 'https://api.dicebear.com/8.x/identicon/svg?seed='+username
  )
}



  // GetUserObject(): Promise<void> {
  //   try {
  //     const user = await this.studentService.getStudent(this.tokenStorage.getUser().userId).toPromise();
  //     if (user) {
  //       this.user.Name = user.Name;
  //       this.user.Surname = user.Surname;
  //       this.user.Patronym = user.Patronym;
  //     } else {
  //       console.error('User data not found');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // }

  
  

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']).then(() => window.location.reload());
  }
}
