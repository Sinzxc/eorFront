import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect empty path to '/home'
  { path: 'home', component: MainPageComponent },
  { path: 'timetable', component: CoursesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
