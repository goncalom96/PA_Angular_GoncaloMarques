import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
import { ServprodutosService } from 'src/app/shared/servprodutos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinhocompras',
  templateUrl: './carrinhocompras.component.html',
  styleUrls: ['./carrinhocompras.component.scss']
})
export class CarrinhocomprasComponent {
  listaCarrinho: Produto[] = [];

  constructor(private servprodutos: ServprodutosService, private router: Router) { }

  ngOnInit() {
    this.listaCarrinho = this.servprodutos.produtosCarrinho();
  }

  removerProdutoCarrinho(produto: Produto): void {
    this.servprodutos.removerProdutoCarrinho(produto);
    this.listaCarrinho = this.servprodutos.produtosCarrinho();
  }

  calcularTotalEncomenda(): number {
    return this.servprodutos.calcularTotalEncomenda();
  }

  mostraInfo(id: number): void {
    this.router.navigate(['/produto', id]);
  }
}
