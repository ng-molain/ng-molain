import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSiteComponent } from './site.component';

describe('SiteComponent', () => {
  let component: LayoutSiteComponent;
  let fixture: ComponentFixture<LayoutSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
