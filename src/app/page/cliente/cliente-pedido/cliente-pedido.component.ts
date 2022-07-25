import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { IPedido } from 'src/app/shared/pedido/pedido';
import { PedidoService } from 'src/app/shared/pedido/pedido.service';
import { DialogConfirmaExclusaoComponent } from './dialog-confirma-exclusao/dialog-confirma-exclusao.component';

@Component({
  selector: 'app-cliente-pedido',
  templateUrl: './cliente-pedido.component.html',
  styleUrls: ['./cliente-pedido.component.scss']
})
export class ClientePedidoComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  pedido$: Observable<IPedido>;
  destroy$ = new Subject<boolean>;

  selectedId: number = -1;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private pedidoService: PedidoService,
    private dialog: MatDialog
  ) {
    this.loading$ = pedidoService.isLoading();
    this.pedido$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.pedidoService.retornaPedidoById(this.selectedId);
      })
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    
  }

  onDelete(): void{
    console.log("abrir modal pra confirmar a exclusao");
    const dialogRef = this.dialog.open(DialogConfirmaExclusaoComponent);

    dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe(remover => {
      if(remover){
        this.deletePedido();
      }
    });
  }

  private deletePedido() {
    this.pedidoService.deletePedidoById(this.selectedId).pipe(takeUntil(this.destroy$)).subscribe(() =>{
      //ir pra pagina de lista de pedidos
      this.router.navigate(["/cliente/lista-pedidos"]);
    });
  }
}
