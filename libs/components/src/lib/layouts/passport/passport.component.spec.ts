import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPassportComponent } from './passport.component';

describe('PassportComponent', () => {
  let component: LayoutPassportComponent;
  let fixture: ComponentFixture<LayoutPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
