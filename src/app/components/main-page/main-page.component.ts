import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
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
