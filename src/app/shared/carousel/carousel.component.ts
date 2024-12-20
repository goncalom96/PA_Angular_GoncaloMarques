import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/shared/produto.model';
import { ServprodutosService } from 'src/app/shared/servprodutos.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  listaProdutos : Produto[] = [];

 @Input() imagens = [{ src: "" }  ];
  @Input() indicators = true;
  @Input()selectedIndex = 0;
  @Input()slideInterval = 3000;
  @Input() autoSlide = false;
  

  constructor(private servprodutos: ServprodutosService, private router: Router) { }

  ngOnInit() {
    if(this.autoSlide) {
      this.autoSlideImages();
    }

    this.lerTodosProdutos();
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  onNextClick() : void {
    if(this.selectedIndex === this.imagens.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  selectImage(index:number): void {
    this.selectedIndex = index;
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
}
