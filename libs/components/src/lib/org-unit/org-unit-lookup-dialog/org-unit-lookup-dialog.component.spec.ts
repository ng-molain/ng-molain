import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgUnitLookupDialogComponent } from './org-unit-lookup-dialog.component';

describe('OrgUnitLookupDialogComponent', () => {
  let component: OrgUnitLookupDialogComponent;
  let fixture: ComponentFixture<OrgUnitLookupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgUnitLookupDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUnitLookupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
