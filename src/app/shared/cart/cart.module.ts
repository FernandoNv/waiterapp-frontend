import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const ngModules = [
  CommonModule
];

const matModules = [
  MatCardModule,
  MatButtonModule,
  MatDialogModule
]

const appComponents = [
  CartComponent
];

@NgModule({
  declarations: [...appComponents],
  imports: [...ngModules, ...matModules],
  exports: [...appComponents]
})
export class CartModule { }
