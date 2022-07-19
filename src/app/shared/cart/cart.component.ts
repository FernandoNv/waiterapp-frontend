import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IItemPedido } from 'src/app/page/cliente/cliente-fazer-pedido/cliente-fazer-pedido.component';
import { IBebida, IPrato } from '../item/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'quantidade', 'acoes'];

  constructor(
    public dialogRef: MatDialogRef<CartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IItemPedido[],
  ) {

  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
