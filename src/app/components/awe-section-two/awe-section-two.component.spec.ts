import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AweSectionTwoComponent } from './awe-section-two.component';

describe('AweSectionTwoComponent', () => {
  let component: AweSectionTwoComponent;
  let fixture: ComponentFixture<AweSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AweSectionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AweSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
