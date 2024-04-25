import { ErrorHandler, Injectable, Injector, TemplateRef, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    console.error('Global error handler caught an error:', error);
    if (error.status === 418) {

    }
  }
  
}
