import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, Subject } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente';

export interface ICadastroCliente{
  nome: string;
  cpf: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private loadingSubject = new Subject<boolean>();

  constructor(private authService: AuthService) { }

  cadastrarCliente(novoCliente: ICadastroCliente):Observable<Cliente> {
    this.loadingSubject.next(true);
    const observable = this.authService.cadastrarCliente(novoCliente);
    observable.subscribe({
      next: () => this.loadingSubject.next(false),
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

  
}