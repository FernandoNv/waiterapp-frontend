import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ICliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-dashboard',
  templateUrl: './cliente-dashboard.component.html',
  styleUrls: ['./cliente-dashboard.component.scss'],
})
export class ClienteDashboardComponent implements OnInit {
  clienteLogado$: Observable<ICliente>;
  buttonFazerPedidoCliked: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router) {
    this.clienteLogado$ = this.clienteService
      .clienteLogado();
  }

  ngOnInit(): void {
  }
}
