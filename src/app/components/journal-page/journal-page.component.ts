import { Component, OnInit } from '@angular/core';
import { Group } from '../../model/Group';
import { Subject } from '../../model/Subject';
import { PublicService } from '../../services/publicService/public.service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrl: './journal-page.component.scss'
})
export class JournalPageComponent implements OnInit {
  groups?:Group[]=[];
  selectedGroup?:Group;

  subjects:Subject[]=[];
  selectedSubject?:Group;
  
  searchValue?: string;
  selectedDate?: NgbDate;

  async ValueSelected(){
    await this.publicService.getScores(this.searchValue ? this.searchValue: "none" , new Date(this.selectedDate?.year!, this.selectedDate?.month!, this.selectedDate?.day!), this.selectedSubject!, this.selectedGroup!).toPromise().then(result =>{
      console.log(result);
    })
  }

  constructor(
   private calendar: NgbCalendar,
   public publicService:PublicService
  ){}

  ngOnInit(): void {
    registerLocaleData(localeRu, 'ru');
    this.selectedDate =this.calendar.getToday();
    this.getGroup();
    this.getSubjects();
  }

  async getGroup() {
    await this.publicService.getAllGroups().toPromise().then((newGroups) => {
      this.groups = newGroups?.sort();
      this.groups?.unshift({ name: "Все группы" } as Group);
      this.selectedGroup = this.groups![0];
    });
  }

  async getSubjects() {
    await this.publicService.getAllSubjects().subscribe((newSubjects) => {
      this.subjects = newSubjects.sort();
      this.selectedSubject=this.subjects[0];
    });
  }

  
}
