import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSiteFooterComponent } from './site-footer.component';

describe('SiteFooterComponent', () => {
  let component: LayoutSiteFooterComponent;
  let fixture: ComponentFixture<LayoutSiteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSiteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSiteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
