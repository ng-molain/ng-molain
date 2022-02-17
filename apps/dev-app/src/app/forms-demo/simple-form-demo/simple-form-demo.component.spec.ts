import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormDemoComponent } from './simple-form-demo.component';

describe('SimpleFormDemoComponent', () => {
  let component: SimpleFormDemoComponent;
  let fixture: ComponentFixture<SimpleFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
