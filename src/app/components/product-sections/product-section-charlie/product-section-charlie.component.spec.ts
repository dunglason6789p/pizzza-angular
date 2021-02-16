import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionCharlieComponent } from './product-section-charlie.component';

describe('ProductSectionCharlieComponent', () => {
  let component: ProductSectionCharlieComponent;
  let fixture: ComponentFixture<ProductSectionCharlieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionCharlieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSectionCharlieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
