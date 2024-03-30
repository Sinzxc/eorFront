import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss'
})
export class CoursesPageComponent {
  searchError='';
  cards: { title: string, img: string, link: string }[] = [
    { title: 'Card 1', img: '../../assets/homePage/card-img.png', link: '#' },
    { title: 'Card 2', img: '../../assets/homePage/card-img1.png', link: '#' },
    { title: 'Card 3', img: '../../assets/homePage/card-img2.png', link: '#' },
    { title: 'Card 4', img: '../../assets/homePage/card-img3.png', link: '#' },
    { title: 'Card 5', img: '../../assets/homePage/card-img4.png', link: '#' },
    { title: 'Card 6', img: '../../assets/homePage/card-img5.png', link: '#' },
    { title: 'Card 7', img: '../../assets/homePage/card-img6.png', link: '#' },
    { title: 'Card 8', img: '../../assets/homePage/card-img7.png', link: '#' },
    { title: 'Card 9', img: '../../assets/homePage/card-img8.png', link: '#' },
    { title: 'Card 10', img: '../../assets/homePage/card-img9.png', link: '#' },
    { title: 'Card 11', img: '../../assets/homePage/card-img10.png', link: '#' },
    { title: 'Card 12', img: '../../assets/homePage/card-img.png', link: '#' },
  ];
  submitForm() {
    this.searchError='';
    const searchValue = (document.getElementById('searchInput') as HTMLInputElement).value;
    if (searchValue==''){
      this.searchError = 'Пожалуйста введите значение';
      console.log(this.searchError);
    }else
    {
    console.log('Search query:', searchValue);

    }
  }
}
