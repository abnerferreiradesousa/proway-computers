import { NotificacaoService } from './../notificacao.service';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho(); 
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerDoCarrinho(itemId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== itemId);
    this.carrinhoService.removerDoCarrinho(itemId);
    this.calculaTotal();
  }

  comprar() {
    this.notificacaoService.notificar("Compra realizada com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])
  }
}
