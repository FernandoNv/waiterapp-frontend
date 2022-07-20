import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { IPedido } from 'src/app/shared/pedido/pedido';
import { environment } from 'src/environments/environment';
import { ICliente } from './cliente';

const cliente: ICliente = {
  id: Number(window.localStorage.getItem('app:cliente:id')),
  nome: String(window.localStorage.getItem('app:cliente:nome')),
  cpf: String(window.localStorage.getItem('app:cliente:cpf')),
  dataCriacao: new Date(Number(window.localStorage.getItem('app:cliente:dataCriacao'))),
  email: String(window.localStorage.getItem('app:cliente:email')),
};

export interface ICadastroCliente{
  nome: string;
  cpf: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = `${environment.apiUrl}`;

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private clienteLogadoSubject = new BehaviorSubject<ICliente>(cliente);

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  cadastrarCliente(novoCliente: ICadastroCliente):Observable<ICliente> {
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

  clienteLogado(): Observable<ICliente>{
    return this.clienteLogadoSubject.asObservable();
  }

  cadastrarPedido(novoPedido: IPedido): Observable<IPedido>{
    this.loadingSubject.next(true);
    const url = `${this.baseUrl}/pedidos/`;
    const observable = this.httpClient.post<IPedido>(url, novoPedido).pipe(
      shareReplay()
    );

    observable.subscribe((pedido) => {
      this.loadingSubject.next(false);
    });

    return observable;
  }
  
}