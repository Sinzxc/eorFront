import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TokenStorageService } from '../tokenService/token-storage.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../authService/auth-service.service';
import { KJUR, b64utoutf8 } from 'jsrsasign';
interface DecodedToken {
  endTime?: number;
  exp?: number;
}
@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {
  private timerSubscription?: Subscription;

  constructor(
    private tokenService: TokenStorageService,
    private router: Router,
    private authService: AuthServiceService
  ) { }
 
  startTimer(): void {
    
    if (this.tokenService.getToken() !== null) {
        const decodedToken: DecodedToken | undefined = this.decodeToken(this.tokenService.getToken()!);
        if (decodedToken) {
            const endTime: number | undefined = decodedToken.exp;
            if (endTime !== undefined) {
                this.setupTimer(endTime);
            } else {
                console.log("Время окончания токена не определено");
            }
        } else {
            console.log("Декодированный токен не найден");
        }
    } else {
        console.log("Токен не найден");
    }
}

private decodeToken(token: string): DecodedToken | undefined {
    const decodedToken = KJUR.jws.JWS.parse(token)?.payloadObj;
    return decodedToken as DecodedToken;
}

private setupTimer(endTime: number): void {
    const currentTimeInSeconds: number = Math.floor(Date.now() / 1000);
    const timeUntilExpirationInSeconds: number = endTime - currentTimeInSeconds;
    console.log((timeUntilExpirationInSeconds * 1000) - (timeUntilExpirationInSeconds * 1000) / 10);
    this.timerSubscription = interval((timeUntilExpirationInSeconds * 1000) - (timeUntilExpirationInSeconds * 1000) / 10)
        .subscribe(() => {
            this.updateToken();
        });
}

  private updateToken(): void {
    const refreshToken = this.tokenService.getRefreshToken();

    if (refreshToken) {
      this.authService.refreshToken(refreshToken)
        .subscribe(
          (data: any) => {
            this.tokenService.saveToken(data.accessToken);
          },
          (err: any) => {
            console.error('Error refreshing token:', err);
            this.handleTokenRefreshError();
          }
        );
    } else {
      console.error('Refresh token not available.');
      this.handleTokenRefreshError();
    }
  }

  private handleTokenRefreshError(): void {
    this.tokenService.signOut();
    window.location.reload();
    this.router.navigate(['/login']);
  }
}
