import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ClienteService, ICadastroCliente } from '../cliente.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent implements OnInit, OnDestroy {
  nomeFormControl = new FormControl('', [Validators.required]);
  cpfFormControl = new FormControl('');
  form: FormGroup;

  loading$: Observable<boolean>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: this.nomeFormControl,
      cpf: this.cpfFormControl,
    });

    this.loading$ = this.clienteService.isLoading();
  }

  ngOnInit(): void {
    
  }

  getErrorMessage(): string {
    return this.nomeFormControl.hasError('required') ? 'Você precisa informar o seu nome' : 'rodei a msg de erro';
  }

  onSubmit(): void{
    if(this.nomeFormControl.valid){
      const novoCliente = {
        nome: this.nomeFormControl.value?.trim(),
        cpf: (this.cpfFormControl.value && this.cpfFormControl.value?.trim().length > 0) ? this.cpfFormControl.value : undefined
      } as ICadastroCliente;

      this.clienteService.cadastrarCliente(novoCliente).pipe(takeUntil(this.destroy$)).subscribe({
        next: (cliente) => {
          //console.log(cliente.dataCriacao.getTime());
          this.router.navigate(["/cliente"]);
        },
        error: () => console.log('Erro na requisicao de cadastro')
      })
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete()
  }

}
