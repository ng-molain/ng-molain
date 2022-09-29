import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFieldComponent } from '../reactive-field.component';

describe('ReactiveFieldComponent', () => {
  let component: ReactiveFieldComponent;
  let fixture: ComponentFixture<ReactiveFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
