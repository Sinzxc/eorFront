import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TokenStorageService } from '../tokenService/token-storage.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../authService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {
  private timerSubscription?: Subscription;
  constructor(
    private tokenService: TokenStorageService,
    private router:Router,
    private authService: AuthServiceService
  ) { }
  startTimer(): void {
    this.timerSubscription = interval(4 * 60 * 1000) 
      .subscribe(() => {
        this.updateToken();
      });
  }

  private updateToken(): void {
    const refreshToken = this.tokenService.getRefreshToken();
  
    if (refreshToken) {
      this.authService.refreshToken(refreshToken)
        .subscribe(
          data => {
            this.tokenService.saveToken(data.accessToken);
          },
          err => {
            this.tokenService.signOut();
            window.location.reload();
            this.router.navigate(['/login']);
          }
        );
    }
  }  
  
}
