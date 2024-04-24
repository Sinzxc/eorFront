import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselCardComponent} from './components/carousel-card/carousel-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './intercept/auth.intercepter';
import {TimetablePageComponent } from './components/timetable-page/timetable-pagecomponent';
import {CoursesPageComponent } from './components/courses-page/courses-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { SubjectPageComponent } from './components/admin/subject-page/subject-page.component';
import { GroupPageComponent } from './components/admin/group-page/group-page.component';
import { LessonsPageComponent } from './components/admin/lessons-page/lessons-page.component';
import { ErrComponent } from './components/err/err.component';
import { AuthorizePageComponent } from './components/authorize-page/authorize-page.component';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './intercept/error';
import { RefreshTokenModalComponent } from './components/refresh-token-modal/refresh-token-modal.component'; 


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CarouselCardComponent,
    TimetablePageComponent,
    CoursesPageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    AdminPageComponent,
    SubjectPageComponent,
    GroupPageComponent,
    LessonsPageComponent,
    ErrComponent,
    AuthorizePageComponent,
    RefreshTokenModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    AppComponent, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
