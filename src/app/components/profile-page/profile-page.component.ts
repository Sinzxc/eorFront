import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';
import { Person } from '../../model/Person';
import { Router } from '@angular/router';
import { StudentService } from '../../services/studentService/student-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private studentService: StudentService,
    private http: HttpClient
  ) {}

  isLoggedIn: boolean = false;
  user!:Person;
  async ngOnInit(): Promise<void> {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']).then(() => window.location.reload());
      return;
    }

    this.isLoggedIn = true;
    const response = await this.studentService.getStudent(this.tokenStorage.getUser().userId).toPromise(); 
    if (response) {
      const responseObject: Person = response;
      this.user = responseObject;
    } else {
      console.error('Response data not found');
}

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
