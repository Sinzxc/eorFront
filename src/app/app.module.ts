import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselCardComponent} from './components/carousel-card/carousel-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestService } from './services/testService/test.service';
import { TokenInterceptor } from './intercept/auth.intercepter';
import {TimetablePageComponent } from './components/timetable-page/timetable-pagecomponent';
import {CoursesPageComponent } from './components/courses-page/courses-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AdminPageComponent } from './components/admin-page/admin-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CarouselCardComponent,
    TimetablePageComponent,
    CoursesPageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
