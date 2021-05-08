import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLookupDialogComponent } from './user-lookup-dialog.component';

describe('UserLookupDialogComponent', () => {
  let component: UserLookupDialogComponent;
  let fixture: ComponentFixture<UserLookupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLookupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLookupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
