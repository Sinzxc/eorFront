import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/testService/test.service';

declare var $: any; // Declare $ as any type

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  backgroundPosition = {};
  response: any;
  searchError?:string;
  
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  cards: { title: string, img: string, link: string }[] = [
    { title: 'Card 1', img: '../../assets/homePage/card-img.png', link: '#' },
    { title: 'Card 2', img: '../../assets/homePage/card-img1.png', link: '#' },
    { title: 'Card 3', img: '../../assets/homePage/card-img2.png', link: '#' },
    { title: 'Card 4', img: '../../assets/homePage/card-img3.png', link: '#' },
  ];

  constructor(private testService: TestService) {}
  submitForm() {
    const searchValue = (document.getElementById('searchInput') as HTMLInputElement).value;
    if (searchValue==''){
      this.searchError = 'Пожалуйста введите значение';
      console.log(this.searchError);
    }else
    {
    // Далее можно выполнить какую-либо логику с полученными данными, например, отправить запрос на сервер
    console.log('Search query:', searchValue);
        
    // Очищаем поле ввода после отправки формы
    (document.getElementById('searchInput') as HTMLInputElement).value = '';
    }
  }
  
  ngOnInit(): void {
    // Example of sending data via POST request
    const data = { username: "admin", password: "admin" };
    console.log("Data created:", data);

    this.testService.postData(data).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  } 

  onMouseMove(event: MouseEvent) {
    const xOffset = (window.innerWidth / 2 - event.clientX) / 60;
    const yOffset = (window.innerHeight / 2 - event.clientY) / 60; 
    this.backgroundPosition = {
      transform: `translate(${xOffset}px, ${yOffset}px)`
    };
  }
}
