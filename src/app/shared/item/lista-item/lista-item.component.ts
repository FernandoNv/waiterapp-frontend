import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { IItemPedido } from 'src/app/page/cliente/cliente-fazer-pedido/cliente-fazer-pedido.component';
import { IBebida, IPrato } from '../item';
import { ItemDetalheComponent } from '../item-detalhe/item-detalhe.component';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.scss']
})
export class ListaItemComponent implements OnInit {
  listaItem$: Observable<(IBebida | IPrato)[]>
  loading$: Observable<boolean>;
  destroy$ = new Subject<boolean>;

  @Output('app-add-item-pedido')
  addItemPedidoEmitter = new EventEmitter<IItemPedido>();

  constructor(
    private itemService: ItemService,
    public dialog: MatDialog
  ) {
    this.loading$ = this.itemService.isLoading();
    this.listaItem$ = this.itemService.listaItems();
  }

  ngOnInit(): void {
    // this.listaItem$.subscribe((listaItems) => {
    //   console.log(listaItems);
    // })
  }

  clickItem(item: (IBebida | IPrato)): void {
    //abrir o modal com as informações do item e a opção de adicionar no carrinho
    const dialogRef = this.dialog.open(ItemDetalheComponent, { data: item });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.addItemPedidoEmitter.emit(result);
    });
  }
}
