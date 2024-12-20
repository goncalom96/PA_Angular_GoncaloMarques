import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
import { ServprodutosService } from 'src/app/shared/servprodutos.service';

@Component({
  selector: 'app-gestaoprodutos',
  templateUrl: './gestaoprodutos.component.html',
  styleUrls: ['./gestaoprodutos.component.scss']
})
export class GestaoprodutosComponent {
  listaProdutos : Produto[] = [];

  constructor(private servprodutos: ServprodutosService) { }
  ngOnInit() {
    this.lerTodosProdutos();
  }

  lerTodosProdutos() {
    this.servprodutos.todosProdutos().subscribe({
      next: produtos => {
        this.listaProdutos = produtos;
      },
      error: erro => alert(erro.message),
      complete: () => console.log("Fim do processamento")
    });
  }


  pesquisar(palavra: string): void {
    this.servprodutos.pesquisarProduto(palavra).subscribe(produtos => {
      this.listaProdutos = produtos.filter(produto =>
        produto.nome.toLowerCase().indexOf(palavra.toLowerCase()) !== -1
      );
    });
  }
  
   inserirProduto(produto : Produto) {

    this.servprodutos.inserirProduto(produto).subscribe(produtos => {
      this.lerTodosProdutos();
    });
  }

  eliminarProduto(id : number) {
    this.servprodutos.eliminarProduto(id).subscribe(info => {
    this.lerTodosProdutos();
    });    
  }

  alterarDestaqueProduto(id: number) {
    this.servprodutos.alterarDestaqueProduto(id).subscribe(info => {
      this.lerTodosProdutos();
    });
  }

  }
