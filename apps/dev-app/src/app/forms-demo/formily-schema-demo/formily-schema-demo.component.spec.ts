import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormilySchemaDemoComponent } from './formily-schema-demo.component';

describe('FormilySchemaDemoComponent', () => {
  let component: FormilySchemaDemoComponent;
  let fixture: ComponentFixture<FormilySchemaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormilySchemaDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormilySchemaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
