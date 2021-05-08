import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSiteHeaderComponent } from './site-header.component';

describe('SiteHeaderComponent', () => {
  let component: LayoutSiteHeaderComponent;
  let fixture: ComponentFixture<LayoutSiteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSiteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
