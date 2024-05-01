import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TimetablePageComponent } from './components/timetable-page/timetable-pagecomponent';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import {  ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ErrComponent } from './components/err/err.component';
import { AuthorizePageComponent } from './components/authorize-page/authorize-page.component';
import { JournalPageComponent } from './components/journal-page/journal-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, // Redirect empty path to '/home'
  { path: 'home', component: MainPageComponent },
  { path: 'courses', component: CoursesPageComponent }, 
  { path: 'timetable', component: TimetablePageComponent },
  { path: 'user-profile', component: ProfilePageComponent }, 
  { path: 'login', component: AuthorizePageComponent}, 
  { path: 'server-error', component: CoursesPageComponent },
  { path: 'admin', component: AdminPageComponent},
  { path: 'journal', component: JournalPageComponent},
  { path: '**', component: ErrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
