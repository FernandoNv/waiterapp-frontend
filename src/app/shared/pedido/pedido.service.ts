import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, finalize, map, Observable, retry, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl = `${environment.apiUrl}/pedidos`;
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  public listaPedidosByIdCliente(idCliente: number): Observable<IPedido[]>{
    this.loadingSubject.next(true);
    const url = `${this.baseUrl}/clientes/${idCliente}`;

    const observable = this.httpClient.get<IPedido[]>(url).pipe(
      retry(3),
      delay(500),
      shareReplay(),
      finalize(() => this.loadingSubject.next(false)),
      map(pedidos => pedidos.map(pedido => ({...pedido, dataCriacao: new Date(pedido.dataCriacao as unknown as string)})))
    );

    observable.subscribe({
      next: (pedidos) => {
        console.log(pedidos);
      },
      error: (err) => {
        console.log("Erro na requisição ", err);
      }
    });

    return observable;
  }

  public retornaPedidoById(idPedido: number): Observable<IPedido>{
    this.loadingSubject.next(true);
    const url = `${this.baseUrl}/${idPedido}`;

    const observable = this.httpClient.get<IPedido>(url).pipe(
      retry(3),
      delay(500),
      shareReplay(),
      finalize(() => this.loadingSubject.next(false)),
      map(pedido => ({...pedido, dataCriacao: new Date(pedido.dataCriacao as unknown as string)}))
    );

    observable.subscribe({
      next: (pedidos) => {
        console.log(pedidos);
      },
      error: (err) => {
        console.log("Erro na requisição ", err);
      }
    });

    return observable;
  }

  public deletePedidoById(idPedido: number): Observable<void>{
    this.loadingSubject.next(true);
    const url = `${this.baseUrl}/${idPedido}`;

    const observable = this.httpClient.delete<void>(url).pipe(
      retry(3),
      delay(500),
      shareReplay(),
      finalize(() => this.loadingSubject.next(false)),
    );

    observable.subscribe({
      next: (pedidos) => {
        console.log(pedidos);
      },
      error: (err) => {
        console.log("Erro na requisição ", err);
      }
    });

    return observable;
  }

  isLoading(): Observable<boolean>{
    return this.loadingSubject.asObservable();
  }
}
