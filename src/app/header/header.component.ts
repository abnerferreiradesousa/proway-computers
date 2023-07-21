import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quantidade: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
  ) {}

  ngOnInit(): void {
    this.quantidade = this.carrinhoService.obtemCarrinho().length;
  }

}
