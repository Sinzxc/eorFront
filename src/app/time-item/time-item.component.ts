import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-time-item',
  standalone: true,
  imports: [],
  templateUrl: './time-item.component.html',
  styleUrl: './time-item.component.scss'
})
export class TimeItemComponent {
  @Input() title: string="";
  @Input() teacher: string="";
  @Input() classRoom: string="";
  @Input() number: string="";
  constructor() { }
}
