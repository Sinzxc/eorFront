import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  @Input() user: string="";
  isActive: boolean = false;
  Style: string="";

  toggleBurger(): void {
    this.isActive = !this.isActive;
  }
}
