import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: 
  [
  CardComponent,
  CommonModule
]
})
export class CarouselComponent {
  cards = [
    [
      { title: 'Card 1', img: '../../assets/homePage/card-img.png',link:'#' },
      { title: 'Card 2', img: '../../assets/homePage/card-img.png',link:'#' },
      { title: 'Card 3', img: '../../assets/homePage/card-img.png',link:'#' },
      { title: 'Card 4', img: '../../assets/homePage/card-img.png',link:'#' }
    ],
    [
      { title: 'Card 5', img: '../../assets/homePage/card-img.png',link:'#' },
      { title: 'Card 6', img: '../../assets/homePage/card-img.png',link:'#' },
      { title: 'Card 7', img: '../../assets/homePage/card-img.png',link:'#' },
      { title: 'Card 8', img: '../../assets/homePage/card-img.png',link:'#' }
    ],
    // Добавьте больше массивов карточек, если необходимо
  ];
  currentIndex = 0;

  constructor() { }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }
}
