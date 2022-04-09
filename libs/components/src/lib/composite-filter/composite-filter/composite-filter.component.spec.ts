import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeFilterComponent } from './composite-filter.component';

describe('CompositeFilterComponent', () => {
  let component: CompositeFilterComponent;
  let fixture: ComponentFixture<CompositeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
