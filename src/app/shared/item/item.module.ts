import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ListaItemComponent } from './lista-item/lista-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ItemDetalheComponent } from './item-detalhe/item-detalhe.component';
import { MatButtonModule } from '@angular/material/button';

const matModules = [
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule,
];

const ngModules = [
  CommonModule
];

const appComponents = [
  ItemComponent,
  ListaItemComponent,
  ItemDetalheComponent
]

@NgModule({
  declarations: [ ...appComponents ],
  imports: [...ngModules, ...matModules],
  exports: [ ...appComponents ]
})
export class ItemModule { }
