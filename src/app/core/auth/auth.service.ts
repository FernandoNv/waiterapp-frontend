import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import { ICliente } from 'src/app/page/cliente/cliente';
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

  cadastrarCliente(novoCliente: ICadastroCliente):Observable<ICliente> {
    const url = `${this.baseUrl}/clientes/`;
    const observable = this.httpClient.post<ICliente>(url, novoCliente).pipe(
      map((cliente) => ({...cliente, dataCriacao:  new Date(cliente.dataCriacao)})),
      shareReplay()
    );
    observable.subscribe((cliente) => {
      this.saveCliente(cliente);
      this.isClienteLogadoSubject.next(true);
    });
    return observable;
  }

  logoutCliente() {
    if(this.clienteLogado()){
      window.localStorage.clear();
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
  
  private saveCliente(cliente: ICliente): void{
    window.localStorage.setItem('app:cliente:nome', cliente.nome);
    window.localStorage.setItem('app:cliente:id', cliente.id.toString());
    window.localStorage.setItem('app:cliente:dataCriacao', cliente.dataCriacao.getTime().toString());
    window.localStorage.setItem('app:cliente:cpf', cliente.cpf as string);
  }
}
