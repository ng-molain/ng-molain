import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormilyMarkupDemoComponent } from './formily-markup-demo.component';

describe('FormilyMarkupDemoComponent', () => {
  let component: FormilyMarkupDemoComponent;
  let fixture: ComponentFixture<FormilyMarkupDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormilyMarkupDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormilyMarkupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
