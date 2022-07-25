import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'cliente',
    loadChildren: () => import('./page/cliente/cliente.module').then(m => m.ClienteModule),
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
