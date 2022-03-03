import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerControlComponent } from './color-picker-control.component';

describe('ColorPickerControlComponent', () => {
  let component: ColorPickerControlComponent;
  let fixture: ComponentFixture<ColorPickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
