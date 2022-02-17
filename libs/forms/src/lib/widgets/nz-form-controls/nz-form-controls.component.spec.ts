import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzFormControlsComponent } from './nz-form-controls.component';

describe('NzFormControlsComponent', () => {
  let component: NzFormControlsComponent;
  let fixture: ComponentFixture<NzFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzFormControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NzFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
