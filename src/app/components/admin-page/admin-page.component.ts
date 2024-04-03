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
  styleUrls: ['./admin-page.component.scss'],
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

  async ngOnInit() {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']).then(() => window.location.reload());
      return;
    }
    this.isLoggedIn = true;
    this.getUsers();
    this.getSubjects();
    this.getGroups();
    setInterval(() => {
      this.getUsers();
      this.getSubjects();
      this.getGroups();
    }, 5000);
  }

  createChanged(): void {
    this.userCreating = !this.userCreating;
  }

  subjectcreateChanged(): void {
    this.subjectCreating = !this.subjectCreating;
  }

  async getUsers() {
    this.adminService.getAllUsers().subscribe((newUsers) => {
      this.users = newUsers;
    });
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
    console.log('Selected user:', this.selectedUser);
    this.changingUsername =this.selectedUser?.username;
    this.changingName =this.selectedUser?.person.name;
    this.changingSname =this.selectedUser?.person.sname;
  }

  async createUser() {
    this.creatingError = '';
    try {
      const createResponse = await this.adminService
        .registerUser(
          this.creatingUsername!,
          this.creatingPassword!,
          this.creatingName!,
          this.creatingSname!
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
          this.creatingError = 'Не известная ошибка';
          break;
      }
    }
  }

  updateUser(){
    this.changingError = '';
    this.adminService.updateUser(this.selectedUser!.username!,this.changingUsername!,this.changingPassword!,this.changingName!,this.changingSname!).subscribe((newGroup) => {
    });
  }
}
