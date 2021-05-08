import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFrameworkProductComponent } from './view-framework-product.component';

describe('ViewFrameworkProductComponent', () => {
  let component: ViewFrameworkProductComponent;
  let fixture: ComponentFixture<ViewFrameworkProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFrameworkProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFrameworkProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
