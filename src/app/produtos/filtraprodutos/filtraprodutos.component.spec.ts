import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltraprodutosComponent } from './filtraprodutos.component';

describe('FiltraprodutosComponent', () => {
  let component: FiltraprodutosComponent;
  let fixture: ComponentFixture<FiltraprodutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltraprodutosComponent]
    });
    fixture = TestBed.createComponent(FiltraprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
