import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './timetable-page.component.html',
  styleUrl: './timetable-page.component.scss',
})
export class TimetablePageComponent {
  
  dates: { date: string }[] = [];
  
  times: { title: string,classRoom:string,teacher:string,pare:string }[] = 
  [
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' ,pare:"2" },
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' ,pare:"3" },
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' ,pare:"4"},
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' ,pare:"5"},
    { title: 'МДК 03.01', classRoom: '31',teacher:'Погорелова М.Н' ,pare:"6"}
  ]
  groups = 
  [
    {group:"ИС-31"},
    {group:"ИС-32"},
    {group:"ИС-33"},
  ]
  ngOnInit(): void {
    for (var i = 0; i < 5; i++) {
      var currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      var dateString = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate() + '.' + ((currentDate.getMonth()+1) < 10 ? '0' : '') + (currentDate.getMonth()+1) + '.' + currentDate.getFullYear();
      this.dates.push({date: dateString});
    }
  }
}
