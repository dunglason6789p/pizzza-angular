import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddCartComponent } from './popup-add-cart.component';

describe('PopupAddCartComponent', () => {
  let component: PopupAddCartComponent;
  let fixture: ComponentFixture<PopupAddCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
