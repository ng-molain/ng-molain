import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputControlComponent } from './input-control.component';

describe('InputControlComponent', () => {
  let component: InputControlComponent;
  let fixture: ComponentFixture<InputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
