import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AweSectionThreeComponent } from './awe-section-three.component';

describe('AweSectionThreeComponent', () => {
  let component: AweSectionThreeComponent;
  let fixture: ComponentFixture<AweSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AweSectionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AweSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
