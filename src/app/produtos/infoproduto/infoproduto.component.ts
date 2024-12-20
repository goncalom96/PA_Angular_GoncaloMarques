import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/shared/produto.model';
import { ServprodutosService } from 'src/app/shared/servprodutos.service';

@Component({
  selector: 'app-infoproduto',
  templateUrl: './infoproduto.component.html',
  styleUrls: ['./infoproduto.component.scss']
})
export class InfoprodutoComponent {
  id!: number;
  produto!: Produto;

  constructor(private rotaAtiva: ActivatedRoute, private servprodutos: ServprodutosService, private location: Location) {}
  
 ngOnInit() {
    this.id=Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.servprodutos.infoProduto(this.id).subscribe(produto => {
    this.produto = produto;
    });
  }

  adicionarCarrinho(produto: Produto): void {
    alert("Produto adicionado ao carrinho!");
    this.servprodutos.adicionarProdutoCarrinho(produto);
  }

  voltarPaginaAnterior(): void {
    this.location.back();
  }

}
