import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, retry, shareReplay, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBebida, IPrato, IIngrediente } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private baseUrl = `${environment.apiUrl}/itens`;

  constructor(private httpCliente: HttpClient) { }

  listaItems(): Observable<(IBebida | IPrato)[]>{
    const url = `${this.baseUrl}`;
    this.loadingSubject.next(true);
    const observable = this.httpCliente.get<(IBebida | IPrato)[]>(url).pipe(
      delay(1000),
      retry(3),
      map((items) => {
        const values = items.map(item => {
          //tratar a data
          if(!('quantidade' in item)){
            const novoItem = this.fixDate(item);
            const ingredientes = item.ingredientes.map(ingrediente => this.fixDate(ingrediente as IIngrediente));
            return ({ ...novoItem, ingredientes: ingredientes as unknown as IIngrediente });
          };

          return this.fixDate(item) as (IPrato | IBebida);
        });

        return values as (IPrato | IBebida)[];
      }),
      shareReplay()
    );

    observable.subscribe({
      next: (items) => {
        this.loadingSubject.next(false);
        console.log(items);
      },
      error: () => this.loadingSubject.next(false), 
    })

    return observable;
  }

  private fixDate(value: (IPrato | IBebida | IIngrediente)): (IPrato | IBebida | IIngrediente){
    return ({
      ...value, 
      dataCriacao: new Date(value.dataCriacao), 
      descricao: (value.descricao === null) || (value.descricao.length === 0)? 'Sem descrição' : value.descricao });
  }

  isLoading(): Observable<boolean>{
    return this.loadingSubject.asObservable();
  }
}
