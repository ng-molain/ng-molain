import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLookupFastComponent } from './user-lookup-fast.component';

describe('UserLookupFastComponent', () => {
  let component: UserLookupFastComponent;
  let fixture: ComponentFixture<UserLookupFastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLookupFastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLookupFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
