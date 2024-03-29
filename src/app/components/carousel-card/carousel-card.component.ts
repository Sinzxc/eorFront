import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss',
})
export class CarouselCardComponent {
  @Input() title: string="";
  @Input() link: string="";
  @Input() img: string="";
}
