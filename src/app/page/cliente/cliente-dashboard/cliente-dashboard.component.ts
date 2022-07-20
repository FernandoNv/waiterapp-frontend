import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-dashboard',
  templateUrl: './cliente-dashboard.component.html',
  styleUrls: ['./cliente-dashboard.component.scss'],
})
export class ClienteDashboardComponent implements OnInit {
  clienteLogado$: Observable<Cliente>;
  buttonFazerPedidoCliked: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router) {
    this.clienteLogado$ = this.clienteService
      .clienteLogado()
      .pipe(
        map((cliente) => ({
          ...cliente,
          cpf: cliente.cpf === null ? cliente.cpf : 'Não informado',
        }))
      );
  }

  ngOnInit(): void {
  }
}
