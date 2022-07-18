import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, shareReplay, Subject } from 'rxjs';
import { Cliente } from 'src/app/page/cliente/cliente';
import { ICadastroCliente } from 'src/app/page/cliente/cliente.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isClienteLogadoSubject = new BehaviorSubject<boolean>(false);
  private baseUrl = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient, private router: Router) { 
    this.isClienteLogadoSubject.next(this.clienteLogado());
  }

  loginCliente(cpf: string): Observable<Cliente>  {
    const url = `${this.baseUrl}/clientes/`;
    const body = { cpf }
    const observable = this.httpClient.post<Cliente>(url, body).pipe(shareReplay());
    observable.subscribe((cliente) => {
      //Todo: Refatorar essa lógica para nao expor os dados
      window.localStorage.setItem('cliente-logado', JSON.stringify(cliente));
    });
    return observable;
  }

  cadastrarCliente(novoCliente: ICadastroCliente):Observable<Cliente> {
    const url = `${this.baseUrl}/clientes/`;
    const observable = this.httpClient.post<Cliente>(url, novoCliente).pipe(
      map((cliente) => ({...cliente, dataCriacao:  new Date(cliente.dataCriacao)})),
      shareReplay()
    );
    observable.subscribe((cliente) => {
      window.localStorage.setItem('app:cliente:nome', cliente.nome);
      window.localStorage.setItem('app:cliente:id', cliente.id.toString());
      window.localStorage.setItem('app:cliente:dataCriacao', cliente.dataCriacao.getTime().toString());
      window.localStorage.setItem('app:cliente:cpf', cliente.cpf);

      this.isClienteLogadoSubject.next(true);
    });
    return observable;
  } 

  logoutCliente() {
    if(this.clienteLogado()){
      window.localStorage.removeItem('app:cliente:nome');
      window.localStorage.removeItem('app:cliente:id');
      window.localStorage.removeItem('app:cliente:dataCriacao');
      window.localStorage.removeItem('app:cliente:cpf');
      this.isClienteLogadoSubject.next(false);

      this.router.navigate(['/cliente/login']);
    }
  }

  private clienteLogado(): boolean{
    return !!window.localStorage.getItem('app:cliente:id');
  }
  
  public isClienteLogado(): Observable<boolean> {
    return this.isClienteLogadoSubject.asObservable();
  }     
}
