import { Component, Input, OnInit } from '@angular/core';
import { IPedido } from '../pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  @Input()
  pedido: IPedido | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
