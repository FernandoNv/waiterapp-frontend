import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { concatMap, Observable, retry, Subject, take, takeUntil } from 'rxjs';
import { ClienteService } from 'src/app/page/cliente/cliente.service';
import { IPedido } from '../pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})
export class ListaPedidosComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  pedidos$: Observable<IPedido[]> | undefined;
  destroy$ = new Subject<boolean>();

  isLoading = false;

  displayedColumns: string[] = ['id', 'dataCriacao', 'estado', 'garcom', 'precoTotal'];

  constructor(
    private pedidoService: PedidoService, 
    private clienteService: ClienteService
  ) {
    this.loading$ = this.pedidoService.isLoading();
    //Com um bug na verificação do loading no html
    // this.loading$.pipe(takeUntil(this.destroy$)).subscribe((next) => this.isLoading = next);
    // this.pedidos$ = this.clienteService.clienteLogado().pipe(
    //   concatMap(clienteLogado => this.pedidoService.listaPedidosByIdCliente(Number(clienteLogado.id)))
    // );
    this.clienteService.clienteLogado().pipe(
      takeUntil(this.destroy$)
    ).subscribe(cliente => {
      this.pedidos$ = this.pedidoService.listaPedidosByIdCliente(Number(cliente.id));
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    
  }

  sortData(sort: Sort) {
    console.log(sort);
  }

}
