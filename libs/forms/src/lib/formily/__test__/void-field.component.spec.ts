import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidFieldComponent } from '../void-field.component';

describe('VoidFieldComponent', () => {
  let component: VoidFieldComponent;
  let fixture: ComponentFixture<VoidFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
