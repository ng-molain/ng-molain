import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingFormDemoComponent } from './setting-form-demo.component';

describe('SettingFormDemoComponent', () => {
  let component: SettingFormDemoComponent;
  let fixture: ComponentFixture<SettingFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingFormDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
