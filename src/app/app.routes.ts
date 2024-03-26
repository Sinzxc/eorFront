import { Routes } from '@angular/router';
import { MainPageComponent } from '../app/main-page/main-page.component';
import { AuthorizeComponent } from '../app/authorize/authorize.component';
import { TimetableComponent } from '../app/timetable/timetable.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path:'main', component: MainPageComponent },
    { path: 'authorize', component: AuthorizeComponent },
    { path: 'time', component: TimetableComponent }
];
