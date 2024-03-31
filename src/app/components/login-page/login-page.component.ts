import { Component,OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/authService/auth-service.service';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent  implements OnInit{

  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private tokenStorage: TokenStorageService
    ){}

    roles: string[] = []
    isLoggedIn:boolean = false
    errors:string=""
    form: any = {
      username: null,
      password: null
    }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles
      console.log(this.roles);
    }
    if(this.isLoggedIn)
      this.router.navigate(['/home']).then(() => {window.location.reload()})
  }
  onSubmit(): void {
    const {username, password} = this.form

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data)

        this.isLoggedIn = true
        this.roles = this.tokenStorage.getUser().role

        this.router.navigate(['/home']).then(() => {window.location.reload()})
      },
      error: (err) => {
        switch (err.status){
          case 401:
            this.errors = "Не верные данные"
            break;
          case 403:
            this.errors = "Не верные данные"
            break;
          case 404:
            this.errors = "Не верные данные"
            break;
          case 500:
            this.errors = "Ошибка сервера"
            break;
          default:
            this.errors = "Не предвиденная ошибка"
            break;
        }
      }
    })
  }
}
