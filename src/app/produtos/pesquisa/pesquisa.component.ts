import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent {
  @Output() palavraPesquisa = new EventEmitter<string>();

  campoPesquisa : string = '';

  processaPesquisa() {
    this.palavraPesquisa.emit(this.campoPesquisa);
  }
  limpaPesquisa() {
    this.palavraPesquisa.emit('');
    this.campoPesquisa='';
  }

}
