import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const matModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
];
const ngModules = [
  CommonModule,
];
const ngxModules = [];

@NgModule({
  declarations: [LayoutComponent],
  imports: [...ngModules, ...matModules],
  exports:[LayoutComponent]
})
export class LayoutModule { }
