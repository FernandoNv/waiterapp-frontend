import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { PedidoComponent } from './pedido/pedido.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';

const matModules = [
  MatProgressSpinnerModule,
  MatTableModule,
  MatSortModule,
  MatButtonModule,
];

const ngModules = [
  CommonModule
];

const appComponents = [
  ListaPedidosComponent,
  PedidoComponent
];

@NgModule({
  declarations: [...appComponents],
  imports: [...ngModules, ...matModules],
  exports: [...appComponents]
})
export class PedidoModule { }
