import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupControlComponent } from './radio-group-control.component';

describe('RadioGroupControlComponent', () => {
  let component: RadioGroupControlComponent;
  let fixture: ComponentFixture<RadioGroupControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioGroupControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
