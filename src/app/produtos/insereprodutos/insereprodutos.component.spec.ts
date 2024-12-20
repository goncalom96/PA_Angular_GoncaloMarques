import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsereprodutosComponent } from './insereprodutos.component';

describe('InsereprodutosComponent', () => {
  let component: InsereprodutosComponent;
  let fixture: ComponentFixture<InsereprodutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsereprodutosComponent]
    });
    fixture = TestBed.createComponent(InsereprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
