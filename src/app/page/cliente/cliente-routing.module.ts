import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDashboardComponent } from './cliente-dashboard/cliente-dashboard.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteDashboardComponent,
    pathMatch: 'full',
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
