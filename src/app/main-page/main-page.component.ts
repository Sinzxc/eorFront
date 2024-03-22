import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { MainHeaderComponent  } from '../main-header/main-header.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: 
  [
    CommonModule,
    CarouselComponent,
    MainHeaderComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  backgroundPosition = {};

  onMouseMove(event: MouseEvent) {
    const xOffset = (window.innerWidth / 2 - event.clientX) / 60;
    const yOffset = (window.innerHeight / 2 - event.clientY) / 60; 
    this.backgroundPosition = {
      transform: `translate(${xOffset}px, ${yOffset}px)`
    };
  }
}
