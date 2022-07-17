import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { MatButtonModule } from '@angular/material/button';


const matModules = [
  MatButtonModule
];

const ngModules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [...ngModules, ...matModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
