import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TimetablePageComponent } from './components/timetable-page/timetable-pagecomponent';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import {  ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to '/home'
  { path: 'home', component: MainPageComponent },
  { path: 'courses', component: CoursesPageComponent }, 
  { path: 'timetable', component: TimetablePageComponent },
  { path: 'user-profile', component: ProfilePageComponent }, 
  { path: 'login', component: LoginPageComponent }, 
  { path: 'server-error', component: CoursesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
