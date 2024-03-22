import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainPageComponent   } from './main-page/main-page.component';
import {  AuthorizeComponent  } from './authorize/authorize.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainPageComponent,
    AuthorizeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EOR';
}
