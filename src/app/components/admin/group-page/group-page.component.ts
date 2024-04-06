import { Component,OnInit } from '@angular/core';
import {Group } from '../../../model/Group';
import { AdminService } from '../../../services/adminService/admin.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrl: './group-page.component.scss'
})
export class GroupPageComponent implements OnInit {
  groupCreating:boolean = false;
  groups?:Group[];
  selectedGroup?:Group;

  creatingError:string = "";
  changingError:string = "";
  
  changingGroupName?:string="";
  creatingGroupName?:string;

  constructor(
    private adminService: AdminService
  ){}

  ngOnInit(): void {
    this.getGroup()
  }

  GroupcreateChanged(){
    this.groupCreating = !this.groupCreating;
  }

  createGroup(){
    this.adminService.createGroup(this.creatingGroupName!).subscribe(
        res => {
          this.creatingGroupName = "";
        },
        err => {
          this.creatingError = err.error.message;
        }
      )
    this.creatingGroupName = "";
    this.creatingError = "";
  }

  changeGroup(){
    this.adminService.updateGroup(this.changingGroupName!,this.selectedGroup!.name).subscribe(
      res => {
        this.changingError = "";
      },
      err => {
        this.changingError = err.error.message;
      }
    )
  this.changingGroupName = "";
  this.changingError = "";
  }
    deleteGroup(){
    this.adminService.deleteGroup(this.selectedGroup!.name).subscribe(
      res => {
        this.changingError = "";
      },
      err => {
        this.changingError = err.error.message;
      }
    )
  this.changingGroupName = "";
  this.changingError = "";
  }


  onSelectionChange(event:Event){
    this.changingGroupName=this.selectedGroup?.name;
  }

  async getGroup() {
    this.adminService.getAllGroups().subscribe((newGroup) => {
      this.groups = newGroup;
    });
  }

}
