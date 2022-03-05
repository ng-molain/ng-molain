import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitInDurationComponent } from './limit-in-duration.component';

describe('LimitInDurationComponent', () => {
  let component: LimitInDurationComponent;
  let fixture: ComponentFixture<LimitInDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitInDurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitInDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
