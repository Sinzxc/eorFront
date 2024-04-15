import { Component,OnInit} from '@angular/core';
import { PublicService } from '../../services/publicService/public.service';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';
import { Group } from '../../model/Group';
import { TimeTableItem } from '../../model/TimeTableItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './timetable-page.component.html',
  styleUrl: './timetable-page.component.scss',
})
export class TimetablePageComponent implements OnInit {
  
  dates: { date: number,month:string ,dayOfWeek:string,fulldate:string}[] = [];
  groups:Group[]=[]
  times:TimeTableItem[]=[]

  selectedDate?:{ date: number,month:string ,dayOfWeek:string,fulldate:string};
  selectedGroup?:Group;

  constructor(private publicService: PublicService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (!this.tokenStorageService.getToken()) {
      this.router.navigate(['/login']);
      return;
    }
    this.generateDates();
    this.getGroup();
    this.selectedDate = this.dates[0];
    this.publicService.getCurrentGroup(this.tokenStorageService.getUser().userId)
      .subscribe((groupTitle: string) => {
        this.groups.forEach(group => {
          if (groupTitle == group.name)
            {
              this.selectedGroup = group;
              this.getTimeTable();
            }
        });
      });
  }

  async getTimeTable() {
    await this.publicService.getTimeTable(this.selectedDate?.fulldate!,this.selectedGroup?.name!).subscribe((newTimes) => {
      this.times = newTimes;
    });
    
  }
  async   getGroup() {
    await this.publicService.getAllGroups().subscribe((newGroups) => {
      this.groups = newGroups;
    });
  }

  changeSelect(){
    this.getTimeTable();
  }

  generateDates(){
    for (var i = 0; i < 6; i++) {
      var currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      if (currentDate.getDay() === 0) {
        continue;
      }
      var monthNames = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
      ];
      var monthName = monthNames[currentDate.getMonth()];
      var dayOfWeekNames = [
        "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
      ];
      var dayOfWeekName = dayOfWeekNames[currentDate.getDay() - 1];
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
  }
}
