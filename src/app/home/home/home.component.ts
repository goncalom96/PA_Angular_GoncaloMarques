import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/shared/produto.model';
import { ServprodutosService } from 'src/app/shared/servprodutos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listaProdutos : Produto[] = [];
  imagens = [
    { src: "assets/img/slider1.jpg" },
    { src: "assets/img/slider2.jpg" },
    { src: "assets/img/slider3.jpg" }
  ];

  constructor(private servprodutos: ServprodutosService, private router: Router) { }

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

  mostraInfo(id : number) {
    this.router.navigate(['/produto',id]);
  }

}
