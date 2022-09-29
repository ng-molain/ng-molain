import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursionFieldComponent } from '../recursion-field.component';

describe('RecursionFieldComponent', () => {
  let component: RecursionFieldComponent;
  let fixture: ComponentFixture<RecursionFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursionFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
