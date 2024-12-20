import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { GestaoprodutosComponent } from './produtos/gestaoprodutos/gestaoprodutos.component';
import { InfoprodutoComponent } from './produtos/infoproduto/infoproduto.component';
import { ListaprodutosComponent } from './produtos/listaprodutos/listaprodutos.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { WishlistComponent } from './produtos/wishlist/wishlist.component';
import { CarrinhocomprasComponent } from './produtos/carrinhocompras/carrinhocompras.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '/'
  },
  { path: 'carousel', component: CarouselComponent },
  { path: 'gestaoprodutos', component: GestaoprodutosComponent },
  { path: 'produto/:id', component: InfoprodutoComponent },
  { path: 'listaprodutos', component: ListaprodutosComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'carrinhocompras', component: CarrinhocomprasComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
