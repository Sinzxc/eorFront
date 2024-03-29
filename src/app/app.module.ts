import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TestService } from './services/testService/test.service';
import { AuthIntercepter } from './intercept/auth.intercepter';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [TestService,AuthIntercepter],
  bootstrap: [AppComponent]
})
export class AppModule { }
