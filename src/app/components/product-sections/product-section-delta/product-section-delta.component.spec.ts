import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionDeltaComponent } from './product-section-delta.component';

describe('ProductSectionDeltaComponent', () => {
  let component: ProductSectionDeltaComponent;
  let fixture: ComponentFixture<ProductSectionDeltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionDeltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSectionDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
