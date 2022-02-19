import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberControlComponent } from './input-number-control.component';

describe('InputNumberControlComponent', () => {
  let component: InputNumberControlComponent;
  let fixture: ComponentFixture<InputNumberControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
