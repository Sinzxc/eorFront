import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  
  constructor(
    private tokenStorage:TokenStorageService,
    private router:Router
  ) {}

    ngOnInit(): void {
      if (!this.tokenStorage.getToken()) {
        this.router.navigate(['/login']).then(() => window.location.reload());
        return;
      }
    } 

  backgroundPosition = {};
  response: any;
  searchError?:string;
  cards: { title: string, img: string, link: string }[] = [
    { title: 'Card 1', img: '../../assets/homePage/card-img.png', link: '#' },
    { title: 'Card 2', img: '../../assets/homePage/card-img1.png', link: '#' },
    { title: 'Card 3', img: '../../assets/homePage/card-img2.png', link: '#' },
    { title: 'Card 4', img: '../../assets/homePage/card-img3.png', link: '#' },
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

  onMouseMove(event: MouseEvent) {
    const xOffset = (window.innerWidth / 2 - event.clientX) / 60;
    const yOffset = (window.innerHeight / 2 - event.clientY) / 60; 
    this.backgroundPosition = {
      transform: `translate(${xOffset}px, ${yOffset}px)`
    };
  }
}
