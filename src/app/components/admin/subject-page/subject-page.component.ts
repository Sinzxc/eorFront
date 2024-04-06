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
  
  changingSubjectName?:string="";
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
    this.adminService.createSubject(this.creatingSubjectName!).subscribe(
        res => {
          this.creatingSubjectName = "";
        },
        err => {
          this.creatingError = err.error.message;
        }
      )
    this.creatingSubjectName = "";
    this.creatingError = "";
  }

  changeSubject(){
    this.adminService.updateSubject(this.changingSubjectName!,this.selectedSubject!.name).subscribe(
      res => {
        this.changingError = "";
      },
      err => {
        this.changingError = err.error.message;
      }
    )
  this.changingSubjectName = "";
  this.changingError = "";
  }
    deleteSubject(){
    this.adminService.deleteSubject(this.selectedSubject!.name).subscribe(
      res => {
        this.changingError = "";
      },
      err => {
        this.changingError = err.error.message;
      }
    )
  this.changingSubjectName = "";
  this.changingError = "";
  }


  onSelectionChange(event:Event){
    this.changingSubjectName=this.selectedSubject?.name;
  }

  async getSubjects() {
    this.adminService.getAllSubjects().subscribe((newSubject) => {
      this.subjects = newSubject;
    });
  }

}


