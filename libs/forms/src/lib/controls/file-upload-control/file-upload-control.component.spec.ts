import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadControlComponent } from './file-upload-control.component';

describe('FileUploadControlComponent', () => {
  let component: FileUploadControlComponent;
  let fixture: ComponentFixture<FileUploadControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
