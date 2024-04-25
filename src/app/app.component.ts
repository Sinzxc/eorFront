import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TokenStorageService } from './services/tokenService/token-storage.service';
import { Person } from './model/Person';
import { PublicService } from './services/publicService/public.service';
import { RefreshTokenService } from './services/refreshTokenService/refresh-token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'EER';
  user?:Person;
  currentRoute?: string;
  profileImageHref:string='';
  _isAdmin:boolean = false;
  get isAdmin(): boolean {
    return this._isAdmin
  }
  constructor(private router: Router,
    private  publicService: PublicService,
    private tokenStorage:TokenStorageService,
  private refreshTokenService: RefreshTokenService) {
      if(tokenStorage.getToken()!=null){
        this.getAvatar()
        this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
          }
        });
        this.getUser()
        this._isAdmin=tokenStorage.getUser().role=="admin";
      }
      refreshTokenService.startTimer();
  }

  async getAvatar(){
    const username = await this.publicService.getUsername(this.tokenStorage.getUser().userId).subscribe(username =>
      this.profileImageHref = 'https://api.dicebear.com/8.x/identicon/svg?seed='+username
    )
  }
  

  async getUser(){
    const response = await this.publicService.getStudent(this.tokenStorage.getUser().userId).toPromise(); 

    if (response) {
      const responseObject: Person = response;
      this.user = responseObject;
    } else {
      console.error('Response data not found');
    }
  }
}