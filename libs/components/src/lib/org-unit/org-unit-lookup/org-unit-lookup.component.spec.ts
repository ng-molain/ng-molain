import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgUnitLookupComponent } from './org-unit-lookup.component';

describe('OrgUnitLookupComponent', () => {
  let component: OrgUnitLookupComponent;
  let fixture: ComponentFixture<OrgUnitLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgUnitLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUnitLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
