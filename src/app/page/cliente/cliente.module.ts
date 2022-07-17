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
import { ClienteDashboardComponent } from './cliente-dashboard/cliente-dashboard.component';

const appComponents = [
  ClienteDashboardComponent,
  ClienteLoginComponent,
];

const ngModules = [
  CommonModule,
  ClienteRoutingModule,
  ReactiveFormsModule,
  RouterModule,
]
const ngxModules = [
  LayoutModule,
];

const matModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
];

@NgModule({
  declarations: [...appComponents],
  imports: [...ngModules, ...ngxModules, ...matModules],
})
export class ClienteModule { }
