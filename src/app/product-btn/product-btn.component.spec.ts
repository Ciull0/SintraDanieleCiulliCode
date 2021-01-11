import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBtnComponent } from './product-btn.component';

describe('ProductBtnComponent', () => {
  let component: ProductBtnComponent;
  let fixture: ComponentFixture<ProductBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
