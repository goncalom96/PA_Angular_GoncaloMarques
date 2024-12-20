import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/shared/produto.model';


@Component({
  selector: 'app-tabelaprodutos',
  templateUrl: './tabelaprodutos.component.html',
  styleUrls: ['./tabelaprodutos.component.scss']
})

export class TabelaprodutosComponent {
  @Input() listaProdutos : Produto[] = [];
  @Output() idProduto = new EventEmitter<number>();
  @Output() idProdutoEliminar = new EventEmitter<number>();
  @Output() idProdutoAtualizar = new EventEmitter<number>();

  constructor(private router: Router) {}

  eliminaProduto(id : number, evento : MouseEvent) {
    evento.stopPropagation();
    this.idProdutoEliminar.emit(id);
  }

  mostraInfo(id : number) {
    this.router.navigate(['/produto',id]);
  }

  alteraDestaqueProduto(id: number, evento : MouseEvent) {
    evento.stopPropagation();
    this.idProdutoAtualizar.emit(id);
    };
  }


