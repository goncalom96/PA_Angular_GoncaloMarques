import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
import { ServprodutosService } from 'src/app/shared/servprodutos.service';

@Component({
  selector: 'app-filtraprodutos',
  templateUrl: './filtraprodutos.component.html',
  styleUrls: ['./filtraprodutos.component.scss']
})
export class FiltraprodutosComponent {
  tiposProdutos: string[] = [];
  coresProdutos: string[] = [];
  filtroTipo: string = 'todos';
  filtroCor: string = 'todos';
  @Output() filtro: EventEmitter<{ tipo: string, cor: string }> = new EventEmitter<{ tipo: string, cor: string }>();

  constructor(private servprodutos: ServprodutosService) { }

  ngOnInit() {
    this.procuraTiposProdutos();
    this.procuraCoresProdutos();
  }

  procuraTiposProdutos() {
    this.servprodutos.todosProdutos().subscribe(produtos => {
      this.tiposProdutos = [...new Set(produtos.map(produto => produto.tipo_de_produto))];
    });
  }

  procuraCoresProdutos() {
    this.servprodutos.todosProdutos().subscribe(produtos => {
      this.coresProdutos = [...new Set(produtos.map(produto => produto.cor))];
    });
  }

  filtra() {
    this.filtro.emit({
      tipo: this.filtroTipo,
      cor: this.filtroCor
    });
  }

}