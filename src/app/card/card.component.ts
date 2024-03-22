import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string="";
  @Input() link: string="";
  @Input() img: string="";
  constructor() { }
}