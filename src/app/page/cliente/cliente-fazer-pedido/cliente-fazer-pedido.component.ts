import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartComponent } from 'src/app/shared/cart/cart.component';
import { IBebida, IPrato } from 'src/app/shared/item/item';
import { Cliente } from '../cliente';
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
export class ClienteFazerPedidoComponent implements OnInit {
  clienteLogado$: Observable<Cliente>;
  itensPedido: IItemPedido[] = [];

  valorTotalPedido: number = 0;

  constructor(
    private clienteService: ClienteService,
    public dialog: MatDialog
  ) {
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
  }

  fazerPedido(): void{
    console.log('items', this.itensPedido);
  }

}
