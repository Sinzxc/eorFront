import { Component,OnInit } from '@angular/core';
import { Subject } from '../../../model/Subject';
import { AdminService } from '../../../services/adminService/admin.service';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrl: './subject-page.component.scss'
})
export class SubjectPageComponent implements OnInit {
  subjectCreating:boolean = false;
  subjects?:Subject[];
  selectedSubject?:Subject;

  creatingError:string = "";
  changingError:string = "";
  
  
  creatingSubjectName?:string;

  constructor(
    private adminService: AdminService
  ){}

  ngOnInit(): void {
    this.getSubjects()
  }

  subjectcreateChanged(){
    this.subjectCreating = !this.subjectCreating;
  }

  createSubject(){
    this.adminService.createSubject(this.creatingSubjectName!).subscribe((newSubject)=>{
    },(err)=>{
      this.creatingError = err.error.message;
    })
    this.creatingSubjectName = "";
    this.creatingError = "";
    this.subjectcreateChanged();
  }


  onSelectionChange(event:Event){

  }

  async getSubjects() {
    this.adminService.getAllSubjects().subscribe((newSubject) => {
      this.subjects = newSubject;
    });
  }

}


