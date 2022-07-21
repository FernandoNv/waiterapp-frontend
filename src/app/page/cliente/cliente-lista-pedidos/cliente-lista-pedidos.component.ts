import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ICliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-lista-pedidos',
  templateUrl: './cliente-lista-pedidos.component.html',
  styleUrls: ['./cliente-lista-pedidos.component.scss'],
})
export class ClienteListaPedidosComponent implements OnInit {
  clienteLogado$: Observable<ICliente>;
  buttonFazerPedidoCliked: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router) {
    this.clienteLogado$ = this.clienteService
      .clienteLogado();
  }

  ngOnInit(): void {
  }
}
