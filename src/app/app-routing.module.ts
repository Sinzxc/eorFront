import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import {TimetableComponent } from './timetable/timetable.component';
import {CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path:'main', component: MainPageComponent },
    { path: 'authorize', component: AuthorizeComponent },
    { path: 'time', component: TimetableComponent },
    { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
