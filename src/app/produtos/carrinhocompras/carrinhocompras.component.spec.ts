import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhocomprasComponent } from './carrinhocompras.component';

describe('CarrinhocomprasComponent', () => {
  let component: CarrinhocomprasComponent;
  let fixture: ComponentFixture<CarrinhocomprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrinhocomprasComponent]
    });
    fixture = TestBed.createComponent(CarrinhocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
