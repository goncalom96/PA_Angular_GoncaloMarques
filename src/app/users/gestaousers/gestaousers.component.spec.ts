import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaousersComponent } from './gestaousers.component';

describe('GestaousersComponent', () => {
  let component: GestaousersComponent;
  let fixture: ComponentFixture<GestaousersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaousersComponent]
    });
    fixture = TestBed.createComponent(GestaousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
