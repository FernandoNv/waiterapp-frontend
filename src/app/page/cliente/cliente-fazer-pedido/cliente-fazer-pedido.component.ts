import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CartComponent } from 'src/app/shared/cart/cart.component';
import { IBebida, IPrato } from 'src/app/shared/item/item';
import { IPedido } from 'src/app/shared/pedido/pedido';
import { ICliente } from '../cliente';
import { ClienteService } from '../cliente.service';

export interface IItemPedido{
  item: (IPrato | IBebida);
  quantidade: number;
}

@Component({
  selector: 'app-cliente-fazer-pedido',
  templateUrl: './cliente-fazer-pedido.component.html',
  styleUrls: ['./cliente-fazer-pedido.component.scss']
})
export class ClienteFazerPedidoComponent implements OnInit, OnDestroy{
  itensPedido: IItemPedido[] = [];
  valorTotalPedido: number = 0;
  clienteLogado?: ICliente;
  
  clienteLogado$: Observable<ICliente>;
  destroy$ = new Subject<boolean>();

  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.clienteLogado$ = this.clienteService.clienteLogado();

    this.clienteLogado$.pipe(takeUntil(this.destroy$)).subscribe((cliente) =>{
      this.clienteLogado = cliente;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

  onCartClick(): void{
    console.log(this.itensPedido);
    const dialogRef = this.dialog.open(CartComponent, { data: this.itensPedido });

    dialogRef.afterClosed().subscribe(newItensPedido => {
      console.log('fechei o carrinho');
      //this.itensPedido = newItensPedido; 
    });
  }

  addItemPedido(itemPedido: IItemPedido): void{
    this.itensPedido.push(itemPedido);
    this.valorTotalPedido = this.itensPedido.reduce((acc, curr) => acc + (curr.item.preco * curr.quantidade), 0);
    // console.log(this.itensPedido);
  }

  fazerPedido(): void{
    const pedido: IPedido = {
      cliente: { id: Number(this.clienteLogado?.id), dataCriacao: this.clienteLogado?.dataCriacao as Date } as ICliente,
      items: this.itensPedido,
    };

    console.log(pedido);

    this.clienteService.cadastrarPedido(pedido).pipe(takeUntil(this.destroy$)).subscribe({
      next: (pedido)=>{
        console.log(pedido);
        this.router.navigate(["/cliente/dashboard"]);
      },
      error: ()=>{
        console.log("Erro ao fazer o pedido");
      }
    });
  }

}
