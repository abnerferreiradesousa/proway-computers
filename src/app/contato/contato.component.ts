import { NotificacaoService } from './../notificacao.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {

  formValidator = this.fb.group({
    nome: ["", [
      Validators.minLength(2),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.maxLength(300),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private notificacaoService: NotificacaoService,
  ) {}


  enviar() {
    this.notificacaoService.notificar("Mensagem enviada!");
    this.formValidator.reset();
  }

}
