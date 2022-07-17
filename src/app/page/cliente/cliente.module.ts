import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';

const ngModules = [
  CommonModule,
  ClienteRoutingModule,
]
const ngxModules = [
  LayoutModule,
];

@NgModule({
  declarations: [ClienteComponent],
  imports: [...ngModules, ngxModules],
})
export class ClienteModule { }
