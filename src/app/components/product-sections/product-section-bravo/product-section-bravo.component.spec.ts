import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionBravoComponent } from './product-section-bravo.component';

describe('ProductSectionBravoComponent', () => {
  let component: ProductSectionBravoComponent;
  let fixture: ComponentFixture<ProductSectionBravoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionBravoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSectionBravoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
