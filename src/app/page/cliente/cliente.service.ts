import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Cliente } from './cliente';

const cliente = {
  nome: window.localStorage.getItem('app:cliente:nome'),
  cpf: window.localStorage.getItem('app:cliente:cpf'),
  dataCriacao: new Date(Number.parseInt(window.localStorage.getItem('app:cliente:dataCriacao') as unknown as string))
};

export interface ICadastroCliente{
  nome: string;
  cpf: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private clienteLogadoSubject = new BehaviorSubject<Cliente>(cliente as Cliente);

  constructor(private authService: AuthService) { }

  cadastrarCliente(novoCliente: ICadastroCliente):Observable<Cliente> {
    this.loadingSubject.next(true);
    const observable = this.authService.cadastrarCliente(novoCliente);
    observable.subscribe({
      next: (cliente) => {
        this.clienteLogadoSubject.next(cliente);
        this.loadingSubject.next(false);
      },
      error: () => this.loadingSubject.next(false), 
    })

    return observable;
  }

  isClienteLogado(): Observable<boolean>{
    return this.authService.isClienteLogado();
  }

  isLoading(): Observable<boolean>{
    return this.loadingSubject.asObservable();
  }

  clienteLogado(): Observable<Cliente>{
    return this.clienteLogadoSubject.asObservable();
  }
  
}