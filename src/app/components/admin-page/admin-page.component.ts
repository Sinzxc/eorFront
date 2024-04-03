import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/tokenService/token-storage.service';
import { User } from '../../model/User';
import { Router } from '@angular/router';
import { AdminService } from '../../services/adminService/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
  constructor(private router: Router,
    private tokenStorage: TokenStorageService,
    private adminService: AdminService,){}
  isLoggedIn: boolean = false;
  userCreating: boolean = false;
  creatingError?:string;
  changeError?:string;
  users?:User[];
  selectedUser: User | null = null;
  async ngOnInit() {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/login']).then(() => window.location.reload());
      return;
    }
    this.isLoggedIn = true;
    this.getUsers()
  }
  createChanged(): void {
    this.userCreating =!this.userCreating;
  }

  async getUsers() {
    const response = await this.adminService.getAllUsers().toPromise(); 
  
    this.adminService.getAllUsers().subscribe(newUsers => {
      this.users = newUsers;
    });
  }

  onSelectionChange(event: any) {
    console.log('Selected user:', this.selectedUser);
  }

  async createUser(){
    const createResponse = await this.adminService.registerUser("admin3","admin").toPromise(); 
  
    if (createResponse && createResponse) {
      console.log(createResponse);
      
    } else {
      console.error('Response data not found');
    }
    this.getUsers()
  }

}
