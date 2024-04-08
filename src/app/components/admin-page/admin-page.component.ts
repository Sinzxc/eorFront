import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';
import { User } from '../../model/User';
import { Subject } from '../../model/Subject';
import { Router } from '@angular/router';
import { AdminService } from '../../services/adminService/admin.service';
import { delay } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Group } from '../../model/Group';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private adminService: AdminService
  ) {}

  isLoggedIn: boolean = false;

  userCreating: boolean = false;
  subjectCreating: boolean = false;

  creatingError?: string;
  changingError?: string;

  users?: User[];
  subjects?: Subject[];
  groups?: Group[];

  creatingPassword?: string;
  creatingUsername?: string;
  creatingName?: string;
  creatingSname?: string;

  changingPassword?: string;
  changingUsername?: string;
  changingName?: string;
  changingSname?: string;

  selectedUser: User | null = null;
  changeSelectedGroup: Group| null = null;
  createSelectedGroup: Group| null = null;

  async ngOnInit() {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']).then(() => window.location.reload());
      return;
    }
    this.isLoggedIn = true;
    this.getUsers();
    this.getSubjects();
    this.getGroups();
    
  }

  createChanged(): void {
    this.userCreating = !this.userCreating;
  }

  subjectcreateChanged(): void {
    this.subjectCreating = !this.subjectCreating;
  }


  async getUsers() {
    this.adminService.getAllUsers().subscribe((newUsers) => {
      this.users = newUsers.sort((a, b) =>{
        return a.person.name.localeCompare(b.person.name);
    });
  }, (err) => {});
}

  async getSubjects() {
    this.adminService.getAllSubjects().subscribe((newSubject) => {
      this.subjects = newSubject;
    });
  }

  async getGroups() {
    this.adminService.getAllGroups().subscribe((newGroup) => {
      this.groups = newGroup;
    });
  }

  onSelectionChange(event: any) {
    this.changingUsername =this.selectedUser?.username;
    this.changingName =this.selectedUser?.person.name;
    this.changingSname =this.selectedUser?.person.sname;
    this.groups?.forEach(element=> {
      if(element._id == this.selectedUser?.group._id){
      this.changeSelectedGroup = element;
      }
      })
  }

  deleteUser(){
    try{
          this.adminService.deleteUser(this.selectedUser?.username!).subscribe((newGroup) => {
      });      
      this.changingUsername = undefined;
      this.changingPassword = undefined;
      this.changingName = undefined;
      this.changingSname = undefined;
      this.changeSelectedGroup=null;
    }catch(error){
      switch ((error as HttpErrorResponse).status) {
        case 404:
          this.creatingError = 'Пользователя не существует';
          break;
        case 500:
          this.creatingError = 'Ошибка сервера';
          break;
        default:
          this.creatingError = 'Неизвестная ошибка';
          break;
      }
    }
  }

  onGroupSelectionChange(event: any) {
  }

  async createUser() {
    this.creatingError = '';
    try {
      const createResponse = await this.adminService
        .registerUser(
          this.creatingUsername!,
          this.creatingPassword!,
          this.creatingName!,
          this.creatingSname!,
          this.createSelectedGroup?.name!
        )
        .toPromise();
    } catch (error) {
      switch ((error as HttpErrorResponse).status) {
        case 409:
          this.creatingError = 'Пользователь существует';
          break;
        case 500:
          this.creatingError = 'Ошибка сервера';
          break;
        case 200:
          this.creatingPassword = '';
          this.creatingUsername = '';
          this.creatingName = '';
          this.creatingSname = '';
          break;
        default:
          this.creatingError = 'Неизвестная ошибка';
          break;
      }
    }
  }

  updateUser(){
    if(this.selectedUser==null)
      return;
    this.changingError = '';
    try{
      this.adminService.updateUser(this.selectedUser!.username!,this.changingUsername!,this.changingPassword!,this.changingName!,this.changingSname!,this.changeSelectedGroup?._id!).subscribe((newGroup) => {
      });      
      this.changingUsername = undefined;
      this.changingPassword = undefined;
      this.changingName = undefined;
      this.changingSname = undefined;
      this.changeSelectedGroup=null;
    }catch(error){
      switch ((error as HttpErrorResponse).status) {
        case 404:
          this.creatingError = 'Пользователя не существует';
          break;
        case 500:
          this.creatingError = 'Ошибка сервера';
          break;
        default:
          this.creatingError = 'Неизвестная ошибка';
          break;
      }
    }
  }
  
}

