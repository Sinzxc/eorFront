import { Component } from '@angular/core';
import { TimeTableItem } from '../../../model/TimeTableItem';
import { Group } from '../../../model/Group';
import { AdminService } from '../../../services/adminService/admin.service';
import { Subject } from '../../../model/Subject';
import { Person } from '../../../model/Person';


@Component({
  selector: 'app-lessons-page',
  templateUrl: './lessons-page.component.html',
  styleUrl: './lessons-page.component.scss'
})
export class LessonsPageComponent {
  lessons?:TimeTableItem[];

  lessonCreating:boolean = false;

  selectedLesson?:TimeTableItem;
  selectedDate?:{ date: number,month:string ,dayOfWeek:string,fulldate:string };
  selectedGroup?:Group|null;
  selectedTeacher?:Person;

  creatingError:string = "";
  changingError:string = "";


  dates: { date: number,month:string ,dayOfWeek:string,fulldate:string}[] = [];
  groupsForSelect:Group[]=[];
  groups:Group[]=[];
  subjects:Subject[]=[];
  teachers:Person[]=[];


  pareCreate?:string;
  selectedSubjectCreate?:Subject;
  selectedTeacherCreate?:Person;
  classRoomCreate?:string;
  selectedGroupCreate?:Group;
  selectedDateCreate?:{ date: number,month:string ,dayOfWeek:string,fulldate:string};

  pareChange?:number;
  selectedSubjectChange?:Subject;
  selectedTeacherChange?:Person;
  classRoomChange?:string;
  selectedGroupChange?:Group;
  selectedDateChange?:{ date: number,month:string ,dayOfWeek:string,fulldate:string};
  
  constructor(
    private adminService: AdminService
  ){}

  ngOnInit(): void {
   this.generateDates();
   this.getGroup();
   this.getSubjects();
   this.getTeachers();

   const selectedDate = this.selectedDate?.fulldate; // Получаем строку даты
   if (selectedDate) {
       const date = new Date(selectedDate); // Преобразуем строку в тип Date
       this.adminService.getLesson("Все группы", date.toISOString().replace('Z', '+00:00')).subscribe((newLesson) => {
           this.lessons = newLesson;
       });
   }
  }

  generateDates(){
      for (var i = 0; i < 6; i++) {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i);
        
        // Пропускаем воскресенье
        if (currentDate.getDay() === 0) {
          continue;
        }
        
        // Получаем название месяца на русском
        var monthNames = [
          "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
          "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ];
        var monthName = monthNames[currentDate.getMonth()];
    
        // Получаем название дня недели на русском
        var dayOfWeekNames = [
          "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
        ];
        var dayOfWeekName = dayOfWeekNames[currentDate.getDay() - 1]; // уменьшаем на 1, так как в JavaScript дни недели начинаются с воскресенья (0)
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        this.dates.push({ 
          date: currentDate.getDate(),
          month: monthName,
          dayOfWeek: dayOfWeekName,
          fulldate: `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
        });
      }
      this.selectedDate=this.dates[0]
  }
  
  async getGroup() {
    await this.adminService.getAllGroups().subscribe((newGroups) => {
      this.groupsForSelect = newGroups;
      this.groupsForSelect!.unshift({name:"Все группы"} as Group);
      this.selectedGroup=this.groupsForSelect[0]
      this.groups = newGroups;
    });
    await this.adminService.getAllGroups().subscribe((newGroups) => {
      this.groups = newGroups;
    });
  }

  async getSubjects() {
    this.adminService.getAllSubjects().subscribe((newSubjects) => {
      this.subjects = newSubjects;
    });
  }

  async getTeachers() {
    this.adminService.getAllTeachers().subscribe((newTeachers) => {
      this.teachers = newTeachers;
    });
  }
  

  lessoncreateChanged(){
    this.lessonCreating =!this.lessonCreating;
  }

  onSelectionChange(event:Event){
    this.pareChange=this.selectedLesson?.pareNumber
    this.subjects?.forEach(element=> {
      if(element.name == this.selectedLesson?.pareName){
      this.selectedSubjectChange = element;
      }
      })
    this.teachers?.forEach(element=> {
      if(element.name+" "+element.surname == this.selectedLesson?.teacherName){
      this.selectedTeacherChange = element;
      }
      })
    this.groups?.forEach(element=> {
      if(element.name == this.selectedLesson?.groupName){
      this.selectedGroupChange = element;
      }
      })
    this.classRoomChange=this.selectedLesson?.classRoom
    this.selectedDateChange=this.selectedDate
  }
  onMainSelectionChange(event: Event) {
    const selectedDate = this.selectedDate?.fulldate; 
    if (selectedDate) {
        const date = new Date(selectedDate); 
        this.adminService.getLesson(this.selectedGroup?.name!, date.toISOString().replace('Z', '+00:00')).subscribe((newLesson) => {
            this.lessons = newLesson;
        });
    }
}


  async createLesson(){
    console.log("create Lesson")
    this.creatingError='';
    if((!this.selectedSubjectCreate?.name! || !this.selectedTeacherCreate?.name! || !this.selectedTeacherCreate?.surname!  || !this.selectedDate?.fulldate!||!this.pareCreate!||!this.classRoomCreate||!this.selectedGroupCreate?.name!))
      {
        this.creatingError = "Необходимо заполнить все поля";
        return;
      }
    this.adminService.addLesson(this.selectedSubjectCreate?.name!,this.selectedTeacherCreate?.name!,this.selectedTeacherCreate?.surname!,this.selectedDateCreate?.fulldate!,this.pareCreate!,this.classRoomCreate!,this.selectedGroupCreate?.name!).subscribe();
    this.selectedSubjectCreate=undefined;
    this.selectedTeacherCreate=undefined;
    this.selectedDateCreate=undefined;
    this.selectedGroupCreate=undefined;
    this.pareCreate=undefined;
    this.classRoomCreate=undefined;
  }

  changeLesson(){
    var newLesson = { 
      pareNumber: this.pareChange!, 
      pareName: this.selectedSubjectChange?.name!, 
      teacherName: this.selectedTeacherChange?.name! + " " + this.selectedTeacherChange?.surname!, 
      classRoom: this.classRoomChange!.toString()!, 
      groupName: this.selectedGroupChange?.name!, 
      fulldate: this.selectedDateChange?.fulldate!
    }; 
    var currentDate = new Date(this.selectedLesson?.fulldate!);
    const formattedDate = currentDate.toISOString().split('T')[0];
    var currentLesson = { 
        pareNumber: this.selectedLesson?.pareNumber!, 
        pareName: this.selectedLesson?.pareName!, 
        teacherName: this.selectedLesson?.teacherName!, 
        classRoom: this.selectedLesson?.classRoom!.toString()!,
        groupName: this.selectedLesson?.groupName!, 
        fulldate: formattedDate
    }; 
    this.adminService.updateLesson(currentLesson, newLesson).subscribe();  
  }
  deleteLesson(){
    this.creatingError='';
    this.adminService.deleteLesson(this.selectedGroupChange?.name!,this.selectedDateChange?.fulldate!,this.pareChange!).subscribe();
  }
}
