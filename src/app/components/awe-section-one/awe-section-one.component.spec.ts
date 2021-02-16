import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AweSectionOneComponent } from './awe-section-one.component';

describe('AweSectionOneComponent', () => {
  let component: AweSectionOneComponent;
  let fixture: ComponentFixture<AweSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AweSectionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AweSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
