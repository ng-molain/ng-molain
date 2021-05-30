import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgUnitDemoComponent } from './org-unit-demo.component';

describe('OrgUnitDemoComponent', () => {
  let component: OrgUnitDemoComponent;
  let fixture: ComponentFixture<OrgUnitDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgUnitDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUnitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
