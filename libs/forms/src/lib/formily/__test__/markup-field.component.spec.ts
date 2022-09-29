import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupFieldComponent } from '../markup-field.component';

describe('MarkupFieldComponent', () => {
  let component: MarkupFieldComponent;
  let fixture: ComponentFixture<MarkupFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkupFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
