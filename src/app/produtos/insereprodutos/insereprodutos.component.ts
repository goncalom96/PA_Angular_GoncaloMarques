import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/shared/produto.model';

@Component({
  selector: 'app-insereprodutos',
  templateUrl: './insereprodutos.component.html',
  styleUrls: ['./insereprodutos.component.scss']
})

export class InsereprodutosComponent implements OnInit {
  formProdutos! : FormGroup;
  @Output() produto : EventEmitter<Produto> = new EventEmitter();

  ngOnInit() {
    this.formProdutos = new FormGroup({
      nome : new FormControl('', Validators.required),
      marca : new FormControl('',Validators.required),
      tipo_de_produto : new FormControl('',Validators.required),
      cor : new FormControl('',Validators.required),
      preco : new FormControl('',Validators.required),
      descricao : new FormControl('',Validators.required),
      destaque : new FormControl(false)
    });
  }

  insereProduto() {
    console.log(this.formProdutos.value);
      this.produto.emit(this.formProdutos.value);
      this.formProdutos.reset();
  }

}
