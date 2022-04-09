import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableDemoComponent } from './simple-table-demo.component';

describe('SimpleTableDemoComponent', () => {
  let component: SimpleTableDemoComponent;
  let fixture: ComponentFixture<SimpleTableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTableDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
