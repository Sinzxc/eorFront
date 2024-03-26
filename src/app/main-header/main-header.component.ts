import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    BurgerMenuComponent,
    RouterModule
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  user:string="Сосулик Д. С.";
}
