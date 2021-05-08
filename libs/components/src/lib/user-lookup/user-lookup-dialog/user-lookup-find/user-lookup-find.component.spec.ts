import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLookupFindComponent } from './user-lookup-find.component';

describe('UserLookupFindComponent', () => {
  let component: UserLookupFindComponent;
  let fixture: ComponentFixture<UserLookupFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLookupFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLookupFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
