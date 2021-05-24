import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextArrayComponent } from './text-array.component';

describe('TextArrayComponent', () => {
  let component: TextArrayComponent;
  let fixture: ComponentFixture<TextArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
