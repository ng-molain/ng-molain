import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStyleComponent } from './font-style.component';

describe('FontStyleComponent', () => {
  let component: FontStyleComponent;
  let fixture: ComponentFixture<FontStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
