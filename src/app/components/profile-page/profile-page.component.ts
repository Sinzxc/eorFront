import { Component, OnInit} from '@angular/core';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ){}
  isLoggedIn:boolean = false;
  user={
    name: 'Гниловский',
    surname: 'Алексей',
    patronymic: 'Анатольевич',
    role: 'Преподаватель',
    birthday: '2019-01-01',
    group: 'ИС-32',
  };
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }else
      this.router.navigate(['/login']).then(() => {window.location.reload()})
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']).then(() => {window.location.reload()})
  }
}
