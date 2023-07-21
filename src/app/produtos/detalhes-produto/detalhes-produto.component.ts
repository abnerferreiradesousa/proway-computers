import { CarrinhoService } from './../../carrinho.service';
import { NotificacaoService } from './../../notificacao.service';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade: number = 1;

  constructor(
    private produtosService: ProdutosService,
    private router: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService,
  ) {}

  ngOnInit(): void {
    const params = this.router.snapshot.paramMap;
    const id = Number(params.get("id"));
    this.produto = this.produtosService.getOne(id);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("Item adicionado ao carrinho.");
    const carrinhoItem: IProdutoCarrinho = {
      ...this.produto!, // o operador "!" indica confirma a existência do objeto uma vez que a tipagem na declaração do atributo diz que pode ser undefined
      quantidade: this.quantidade,
    } 
    this.carrinhoService.adicionarAoCarrinho(carrinhoItem);
  }

}
