import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { TimeItemComponent } from '../time-item/time-item.component';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [MainHeaderComponent,TimeItemComponent,CommonModule],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss'
})
export class TimetableComponent {
  times = 
    [
      { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' },
      { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' },
      { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' },
      { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' }
    ]
}
