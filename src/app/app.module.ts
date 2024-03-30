import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselCardComponent} from './components/carousel-card/carousel-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestService } from './services/testService/test.service';
import { AuthIntercepter } from './intercept/auth.intercepter';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';





@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CarouselCardComponent,
    CoursesPageComponent
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
  providers: [TestService,AuthIntercepter],
  bootstrap: [AppComponent]
})
export class AppModule { }
