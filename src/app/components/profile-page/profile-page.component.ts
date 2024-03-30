import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  user={
    name: 'Гниловский',
    surname: 'Алексей',
    patronymic: 'Анатольевич',
    role: 'Преподаватель',
    birthday: '2019-01-01',
    group: 'ИС-32',
  };
}
