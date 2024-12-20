import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
import { ServprodutosService } from 'src/app/shared/servprodutos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.scss']
})
export class ListaprodutosComponent {
  listaProdutos: Produto[] = [];
  listaProdutosFiltrados: Produto[] = this.listaProdutos;

  constructor(private servprodutos: ServprodutosService, private router: Router) {}

  ngOnInit() {
    this.lerTodosProdutos();
  }

  lerTodosProdutos() {
    this.servprodutos.todosProdutos().subscribe(produtos => {
      this.listaProdutos = produtos;
    });
  }

  filtrarProdutos(tipo: string, cor: string) {
    this.listaProdutosFiltrados = this.listaProdutos.filter(produto =>
      (tipo === 'todos' || produto.tipo_de_produto === tipo) && (cor === 'todos' || produto.cor === cor)
    );
  }

  verificarWishlist(produto: Produto): boolean {
    return this.servprodutos.verificarWishlist(produto);
  }

  toggleWishlist(produto: Produto): void {
    this.servprodutos.toggleWishlist(produto);
  }

  adicionarCarrinho(produto: Produto): void {
    alert("Produto adicionado ao carrinho!");
    this.servprodutos.adicionarProdutoCarrinho(produto);
  }

  mostraInfo(id: number) {
    this.router.navigate(['/produto', id]);
  }
}
