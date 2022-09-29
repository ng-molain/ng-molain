import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsumerComponent } from '../form-consumer.component';

describe('FormConsumerComponent', () => {
  let component: FormConsumerComponent;
  let fixture: ComponentFixture<FormConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
