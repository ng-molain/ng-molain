import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxGroupControlComponent } from './checkbox-group-control.component';

describe('CheckboxGroupControlComponent', () => {
  let component: CheckboxGroupControlComponent;
  let fixture: ComponentFixture<CheckboxGroupControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxGroupControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxGroupControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
