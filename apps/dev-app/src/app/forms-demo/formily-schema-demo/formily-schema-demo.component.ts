import { Component, OnInit } from '@angular/core';
import {createForm, Form} from "@formily/core";
import {InputComponent} from "@ng-molain/forms";

@Component({
  selector: 'ng-molain-formily-schema-demo',
  templateUrl: './formily-schema-demo.component.html',
  styleUrls: ['./formily-schema-demo.component.scss']
})
export class FormilySchemaDemoComponent implements OnInit {
  form: Form = createForm();

  components = {
    Input: InputComponent
  };

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.form)
    }, 2000);
  }

}
