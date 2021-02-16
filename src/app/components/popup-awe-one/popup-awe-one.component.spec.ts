import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAweOneComponent } from './popup-awe-one.component';

describe('PopupAweOneComponent', () => {
  let component: PopupAweOneComponent;
  let fixture: ComponentFixture<PopupAweOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAweOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAweOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
