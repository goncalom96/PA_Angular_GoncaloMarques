import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
import { ServprodutosService } from 'src/app/shared/servprodutos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  listaProdutos: Produto[] = [];
  wishlist: Produto[] = [];

  constructor(private servprodutos: ServprodutosService, private router: Router) {}

  ngOnInit() {
    this.wishlist = this.servprodutos.wishlist;
  }

  removeProdutoWishlist(produto: Produto) {
    this.servprodutos.removerWishlist(produto);
  }

  mostraInfo(id: number) {
    this.router.navigate(['/produto', id]);
  }
}
