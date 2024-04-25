import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/authService/auth-service.service';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';

@Component({
  selector: 'app-authorize-page',
  templateUrl: './authorize-page.component.html',
  styleUrl: './authorize-page.component.scss'
})
export class AuthorizePageComponent {
  constructor( private router: Router,
    private authService: AuthServiceService,
    private tokenStorage: TokenStorageService,
  ){}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }
  }
  form = {
    username: '',
    password: ''
  };
  error:string = '';
  
  OnSubmit() {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data);
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      },
      error: (err) => {
        this.error = '';
        switch (err.status) {
          case 400:
            this.error = "Ошибка запроса";
            break;
          case 401:
            this.error = "Неверные данные";
            break;
          case 403:
            this.error = "Неверный пароль";
            break;
          case 404:
            this.error = "Несуществующий пользователь";
            break;
          case 500:
            this.error = "Ошибка сервера";
            break;
          default:
            this.error = "Непредвиденная ошибка";
            break;
        }
      }
    });
  }
  
}
