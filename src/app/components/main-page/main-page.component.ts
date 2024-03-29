import { Component,OnInit } from '@angular/core';
import { TestService } from '../../services/testService/test.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  backgroundPosition = {};
  response:any;

  constructor(private testService: TestService) {}

  onMouseMove(event: MouseEvent) {
    const xOffset = (window.innerWidth / 2 - event.clientX) / 60;
    const yOffset = (window.innerHeight / 2 - event.clientY) / 60; 
    this.backgroundPosition = {
      transform: `translate(${xOffset}px, ${yOffset}px)`
    };
  }
  ngOnInit(): void {
    // this.testService.fetchData().subscribe((response: any) => {
    //   console.log(response);  
    //   this.response =response;
    // });   
    const data = { username:"admin",password:"admin" }; // Your data object to be sent
    console.log("data created");
    this.testService.postData(data).subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  } 
  
}
