import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ServprodutosService {

wishlist: Produto[] = [];
private listaCarrinho: Produto[] = [];

private urlAPI = "http://localhost:3000/produtos";

constructor(private http: HttpClient) { }
  
private processaErro(erro: HttpErrorResponse) {
  let mensagem="";
  if (erro.status!==404) {
    mensagem="Não foi possível estabelecer ligação com a API!";
  } else {
    mensagem="Ocorreu um erro.";
  }
  const error = new Error(mensagem);
  return throwError(() => error)
}

todosProdutos() : Observable<Produto[]> {
  return this.http.get<Produto[]>(`${this.urlAPI}`)
    .pipe(
      catchError(this.processaErro)
    );
}

infoProduto(id : number) : Observable<Produto> {
  return this.http.get<Produto>(`${this.urlAPI}/${id}`)
    .pipe(
      catchError(this.processaErro)
    );
}

inserirProduto(produto : Produto) : Observable<Produto> {
  return this.http.post<Produto>(this.urlAPI,produto)
  .pipe(
    catchError(this.processaErro)
  );
}

eliminarProduto(id : number) : Observable<any> {
  return this.http.delete<any>(`${this.urlAPI}/${id}`)
  .pipe(
    catchError(this.processaErro)
  );
}

alterarDestaqueProduto(id: number): Observable<any> {
  return this.http.patch<any>(`${this.urlAPI}/${id}`, { destaque: true })
  .pipe(
    catchError(this.processaErro)
  );
}

pesquisarProduto(palavra : string) : Observable<Produto[]> {
  return this.http.get<Produto[]>(`${this.urlAPI}?nome_like=${palavra}`)
  .pipe(
    catchError(this.processaErro)
  );
} 

filtrarProdutos(tipo: string, cor: string): Observable<Produto[]> {

  if (tipo !== 'todos') {
    this.urlAPI += `tipo_de_produto=${tipo}&`;
  }

  if (cor !== 'todos') {
    this.urlAPI += `cor=${cor}&`;
  }

  return this.http.get<Produto[]>(this.urlAPI)
    .pipe(
      catchError(this.processaErro)
    );
}

verificarWishlist(produto: Produto): boolean {
  return this.wishlist.some(item => item.id === produto.id);
}

toggleWishlist(produto: Produto): void {
  if (this.verificarWishlist(produto)) {
    this.removerWishlist(produto);
  } else {
    this.adicionarWishlist(produto);
  }
}

adicionarWishlist(produto: Produto): void {
  this.wishlist.push(produto);
}

removerWishlist(produto: Produto): void {
  const index = this.wishlist.findIndex(item => item.id === produto.id);
  if (index !== -1) {
    this.wishlist.splice(index, 1);
  }
}

adicionarProdutoCarrinho(produto: Produto): void {
  this.listaCarrinho.push(produto);
}

removerProdutoCarrinho(produto: Produto): void {
  const index = this.listaCarrinho.findIndex(item => item.id === produto.id);
  if (index !== -1) {
    this.listaCarrinho.splice(index, 1);
  }
}

produtosCarrinho(): Produto[] {
  return this.listaCarrinho;
}

calcularTotalEncomenda(): number {
  let total = 0;
  for (const produto of this.listaCarrinho) {
    total += produto.preco;
  }
  return total;
}

}
