import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClienteListaPedidosComponent } from './cliente-lista-pedidos/cliente-lista-pedidos.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClienteFazerPedidoComponent } from './cliente-fazer-pedido/cliente-fazer-pedido.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ItemModule } from 'src/app/shared/item/item.module';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { CartModule } from 'src/app/shared/cart/cart.module';
import {MatBadgeModule} from '@angular/material/badge';
import { PedidoModule } from 'src/app/shared/pedido/pedido.module';
import { ClientePedidoComponent } from './cliente-pedido/cliente-pedido.component';
import { DialogConfirmaExclusaoComponent } from './cliente-pedido/dialog-confirma-exclusao/dialog-confirma-exclusao.component';
import { MatListModule } from '@angular/material/list';


const appComponents = [
  ClienteListaPedidosComponent,
  ClienteLoginComponent,
  ClienteFazerPedidoComponent,
  ClientePedidoComponent,
  DialogConfirmaExclusaoComponent
];

const ngModules = [
  CommonModule,
  RouterModule,
  ClienteRoutingModule,
  ReactiveFormsModule,
]
const ngxModules = [
  LayoutModule,
  ItemModule,
  CartModule,
  PedidoModule
];

const matModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatBadgeModule,
  MatDialogModule,
  MatListModule
];

@NgModule({
  declarations: [...appComponents],
  imports: [...ngModules, ...ngxModules, ...matModules],
})
export class ClienteModule { }
