import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  formularioAvaliacao: FormGroup

  constructor()
  {
    this.formularioAvaliacao = new FormGroup(
      {
        'nomeCurso': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'dataNascimento': new FormControl('', Validators.required),
        'feedback': new FormControl('', Validators.required),
        'nota': new FormControl('', Validators.required),
      }
    )
  }

  onSubmit()
  {
    console.log("Testanto!")
  }

  mensagemCampoInvalido(field: string) {
    return (this.formularioAvaliacao.get(field)?.value === null || this.formularioAvaliacao.get(field)?.value.length === 0) && this.formularioAvaliacao.get(field)?.touched
  }

}

