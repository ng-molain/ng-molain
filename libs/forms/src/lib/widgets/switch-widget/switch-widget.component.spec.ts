import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchWidgetComponent } from './switch-widget.component';

describe('SwitchWidgetComponent', () => {
  let component: SwitchWidgetComponent;
  let fixture: ComponentFixture<SwitchWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
