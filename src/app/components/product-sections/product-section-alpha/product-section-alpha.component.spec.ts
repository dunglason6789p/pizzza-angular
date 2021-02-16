import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionAlphaComponent } from './product-section-alpha.component';

describe('ProductSectionAlphaComponent', () => {
  let component: ProductSectionAlphaComponent;
  let fixture: ComponentFixture<ProductSectionAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSectionAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
