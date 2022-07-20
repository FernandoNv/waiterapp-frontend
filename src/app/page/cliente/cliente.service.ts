import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Cliente } from './cliente';

const cliente: Cliente = {
  id: Number(window.localStorage.getItem('app:cliente:id')),
  nome: String(window.localStorage.getItem('app:cliente:nome')),
  cpf: String(window.localStorage.getItem('app:cliente:cpf')),
  dataCriacao: new Date(Number(window.localStorage.getItem('app:cliente:dataCriacao')))
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
  private clienteLogadoSubject = new BehaviorSubject<Cliente>(cliente);

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