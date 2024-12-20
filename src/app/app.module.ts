import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from './shared/carousel/carousel.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { GestaoprodutosComponent } from './produtos/gestaoprodutos/gestaoprodutos.component';
import { GestaousersComponent } from './users/gestaousers/gestaousers.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { TabelaprodutosComponent } from './produtos/tabelaprodutos/tabelaprodutos.component';
import { PesquisaComponent } from './produtos/pesquisa/pesquisa.component';
import { InsereprodutosComponent } from './produtos/insereprodutos/insereprodutos.component';
import { InfoprodutoComponent } from './produtos/infoproduto/infoproduto.component';
import { ListaprodutosComponent } from './produtos/listaprodutos/listaprodutos.component';
import { FiltraprodutosComponent } from './produtos/filtraprodutos/filtraprodutos.component';
import { WishlistComponent } from './produtos/wishlist/wishlist.component';
import { CarrinhocomprasComponent } from './produtos/carrinhocompras/carrinhocompras.component';


@NgModule({
  declarations: [
    AppComponent,
    GestaoprodutosComponent,
    GestaousersComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    TabelaprodutosComponent,
    PesquisaComponent,
    InsereprodutosComponent,
    InfoprodutoComponent,
    ListaprodutosComponent,
    FiltraprodutosComponent,
    WishlistComponent,
    CarrinhocomprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
