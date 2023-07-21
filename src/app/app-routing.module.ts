import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  { 
    path: 'produtos', 
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) 
  }, 
  // {
  //   path: "produtos/:id",
  //   redirectTo: "",
  //   pathMatch: "full",
  // },
  {
    path: "",
    redirectTo: "produtos",
    pathMatch: "full" // precisa disso para redirecionar de fato
  },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  {
    path: "**", 
    component: NaoEncontradaComponent
  } // Não encontrada deve ficar aqui, se não o redirect não funciona corretamente.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
