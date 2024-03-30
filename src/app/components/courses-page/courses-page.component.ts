import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss'
})
export class CoursesPageComponent {
  times = 
  [
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' },
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' },
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' },
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' },
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' }
  ]
}
