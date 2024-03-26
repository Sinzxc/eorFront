import { Component } from '@angular/core';
import { MainHeaderComponent  } from '../main-header/main-header.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MainHeaderComponent,CardComponent,CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
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
