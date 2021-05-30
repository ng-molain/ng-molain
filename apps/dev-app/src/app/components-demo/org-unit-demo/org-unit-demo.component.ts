import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'ng-molain-org-unit-demo',
  templateUrl: './org-unit-demo.component.html',
  styleUrls: ['./org-unit-demo.component.scss']
})
export class OrgUnitDemoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this._buildForm();
  }

  ngOnInit(): void {

    this.form.patchValue({
      ouSingle: {id: "111", name: "北京市"}
    })
  }

  private _buildForm() {
    this.form = this.fb.group({
      ouSingle: []
    });
  }

  submitForm(value: any, $event: any) {

  }
}
