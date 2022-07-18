import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Cliente } from 'src/app/page/cliente/cliente';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  isClienteLogado$: Observable<boolean>;

  nomeCliente = '';
  // isFuncionarioLogado = false;

  constructor(private authService: AuthService) {
    this.isClienteLogado$ = this.authService.isClienteLogado().pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.isClienteLogado$.subscribe((isLogado)=>{
      if(isLogado){
        this.nomeCliente = window.localStorage.getItem('app:cliente:nome') as string;
      }else{
        this.nomeCliente = '';
      }
    });
  }

  onLogout(): void{
    this.authService.logoutCliente();
  }

}
