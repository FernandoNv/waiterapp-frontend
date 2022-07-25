import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAuthenticationGuard } from 'src/app/core/auth/cliente-authentication.guard';
import { ClienteFazerPedidoComponent } from './cliente-fazer-pedido/cliente-fazer-pedido.component';
import { ClienteListaPedidosComponent } from './cliente-lista-pedidos/cliente-lista-pedidos.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';
import { ClientePedidoComponent } from './cliente-pedido/cliente-pedido.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fazer-pedido',
    pathMatch: 'full',
  },
  {
    path:'fazer-pedido',
    canActivate: [ClienteAuthenticationGuard],
    component: ClienteFazerPedidoComponent
  },
  {
    path: 'lista-pedidos',
    canActivate: [ClienteAuthenticationGuard],
    component: ClienteListaPedidosComponent,
  },
  {
    path: 'pedido-detalhe/:id',
    canActivate: [ClienteAuthenticationGuard],
    component: ClientePedidoComponent,
  },
  {
    path:'login',
    component: ClienteLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
