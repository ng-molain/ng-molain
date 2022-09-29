import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemComponent2 } from './form-item.component';

describe('FormItemComponent', () => {
  let component: FormItemComponent2;
  let fixture: ComponentFixture<FormItemComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormItemComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
