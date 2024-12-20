import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaprodutosComponent } from './tabelaprodutos.component';

describe('TabelaprodutosComponent', () => {
  let component: TabelaprodutosComponent;
  let fixture: ComponentFixture<TabelaprodutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaprodutosComponent]
    });
    fixture = TestBed.createComponent(TabelaprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
