import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: 
  [
  CardComponent,
  CommonModule,
  NgbCarouselModule,
  SlickCarouselModule
]
})
export class CarouselComponent {
  // cards = [
  //   [
  //     { title: 'Card 1', img: '../../assets/homePage/card-img.png',link:'#' },
  //     { title: 'Card 2', img: '../../assets/homePage/card-img1.png',link:'#' },
  //     { title: 'Card 3', img: '../../assets/homePage/card-img2.png',link:'#' },
  //     { title: 'Card 4', img: '../../assets/homePage/card-img3.png',link:'#' }
  //   ],
  //   [
  //     { title: 'Card 5', img: '../../assets/homePage/card-img4.png',link:'#' },
  //     { title: 'Card 6', img: '../../assets/homePage/card-img5.png',link:'#' },
  //     { title: 'Card 7', img: '../../assets/homePage/card-img6.png',link:'#' },
  //     { title: 'Card 8', img: '../../assets/homePage/card-img7.png',link:'#' }
  //   ],
  //   // Добавьте больше массивов карточек, если необходимо
  // ];
  // currentIndex = 0;

  // constructor() { }

  // prevSlide() {
  //   this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  // }

  // nextSlide() {
  //   this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  // }

//   slides = [
//     {img: "http://placehold.it/350x150/000000"},
//     {img: "http://placehold.it/350x150/111111"},
//     {img: "http://placehold.it/350x150/333333"},
//     {img: "http://placehold.it/350x150/666666"}
//   ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1, 
  "responsive": [
    {
      "breakpoint": 1500,
      "settings": {
        "slidesToShow": 3
      }
    },
    {
      "breakpoint": 1100,
      "settings": {
        "slidesToShow": 2
      }
    },
    {
      "breakpoint": 800,
      "settings": {
        "slidesToShow": 1
      }
    }
  ]};
  cards = [
        { title: 'Card 1', img: '../../assets/homePage/card-img.png',link:'#' },
        { title: 'Card 2', img: '../../assets/homePage/card-img1.png',link:'#' },
        { title: 'Card 3', img: '../../assets/homePage/card-img2.png',link:'#' },
        { title: 'Card 4', img: '../../assets/homePage/card-img3.png',link:'#' },
        { title: 'Card 5', img: '../../assets/homePage/card-img3.png',link:'#' },
        { title: 'Card 6', img: '../../assets/homePage/card-img3.png',link:'#' },
        { title: 'Card 7', img: '../../assets/homePage/card-img3.png',link:'#' },
        { title: 'Card 8', img: '../../assets/homePage/card-img3.png',link:'#' }
      ]
  
      
}
