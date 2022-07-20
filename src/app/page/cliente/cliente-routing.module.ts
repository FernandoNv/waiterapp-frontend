import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAuthenticationGuard } from 'src/app/core/auth/cliente-authentication.guard';
import { ClienteDashboardComponent } from './cliente-dashboard/cliente-dashboard.component';
import { ClienteFazerPedidoComponent } from './cliente-fazer-pedido/cliente-fazer-pedido.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';

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
    path: 'dashboard',
    canActivate: [ClienteAuthenticationGuard],
    component: ClienteDashboardComponent,
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
