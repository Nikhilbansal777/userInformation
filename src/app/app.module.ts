import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    UserInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
