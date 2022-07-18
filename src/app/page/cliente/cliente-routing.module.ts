import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAuthenticationGuard } from 'src/app/core/auth/cliente-authentication.guard';
import { ClienteDashboardComponent } from './cliente-dashboard/cliente-dashboard.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteDashboardComponent,
    canActivate: [ClienteAuthenticationGuard]
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
