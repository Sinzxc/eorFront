import { Component } from '@angular/core';
import { TimeTableItem } from '../../../model/TimeTableItem';

@Component({
  selector: 'app-lessons-page',
  templateUrl: './lessons-page.component.html',
  styleUrl: './lessons-page.component.scss'
})
export class LessonsPageComponent {
  lessons?:TimeTableItem[];

  lessonCreating:boolean = false;

  selectedLesson?:TimeTableItem;

  creatingError:string = "";
  changingError:string = "";


  lessoncreateChanged(){
    this.lessonCreating =!this.lessonCreating;
  }

  onSelectionChange(event:Event){

  }

  createLesson(){

  }

  changeLesson(){

  }
  deleteLesson(){
    
  }
}
