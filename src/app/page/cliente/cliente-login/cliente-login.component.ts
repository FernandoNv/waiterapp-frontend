import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent implements OnInit {
  nomeFormControl = new FormControl('', [Validators.required]);
  cpfFormControl = new FormControl('');
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.nomeFormControl,
      cpf: this.cpfFormControl,
    });

    
  }
  ngOnInit(): void {}

  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  getErrorMessage(): string {
    return this.nomeFormControl.hasError('required') ? 'Você precisa informar o seu nome' : 'rodei a msg de erro';
  }

  onSubmit(): void{
    if(this.nomeFormControl.valid){
      console.log({
        nome: this.nomeFormControl.value,
        cpf: this.cpfFormControl.value
      });
    }
  }

}
