import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { MaterialModules } from './material-modules.module';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LayoutModule } from './shared/layout/layout.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    LayoutModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
