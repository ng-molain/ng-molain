import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStyleControlComponent } from './font-style-control.component';

describe('FontStyleControlComponent', () => {
  let component: FontStyleControlComponent;
  let fixture: ComponentFixture<FontStyleControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontStyleControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontStyleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
