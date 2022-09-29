import { Component, OnInit } from '@angular/core';
import {FormRef2} from "@ng-molain/forms";

@Component({
  selector: 'ml-form-consumer',
  template: `
    <p>
      {{jsonStr}}
    </p>
  `,
})
export class FormConsumerComponent implements OnInit {

  constructor(public readonly formRef: FormRef2) { }

  ngOnInit(): void {
    console.log(this.formRef.form)
  }

  get jsonStr() {
    return JSON.stringify(this.formRef.form.values);
    // return '';
  }
}
