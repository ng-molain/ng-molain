import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitInDurationControlComponent } from './limit-in-duration-control.component';

describe('LimitInDurationControlComponent', () => {
  let component: LimitInDurationControlComponent;
  let fixture: ComponentFixture<LimitInDurationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitInDurationControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitInDurationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
