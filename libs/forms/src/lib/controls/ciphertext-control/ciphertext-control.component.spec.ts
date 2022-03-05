import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiphertextControlComponent } from './ciphertext-control.component';

describe('CiphertextControlComponent', () => {
  let component: CiphertextControlComponent;
  let fixture: ComponentFixture<CiphertextControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiphertextControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiphertextControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
