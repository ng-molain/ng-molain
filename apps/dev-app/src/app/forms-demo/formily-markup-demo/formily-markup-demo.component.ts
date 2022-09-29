import { Component, OnInit } from '@angular/core';
import {createForm, ObjectField} from "@formily/core";
import {
  FormItemComponent2,
  InputComponent, InputNumberComponent,
  PasswordComponent,
  SelectComponent,
  TextAreaComponent, TreeSelectComponent
} from "@ng-molain/forms";
import {FormGroup} from "@angular/forms";
import {get} from "lodash-es";

@Component({
  selector: 'ng-molain-formily-markup-demo',
  templateUrl: './formily-markup-demo.component.html',
  styleUrls: ['./formily-markup-demo.component.scss']
})
export class FormilyMarkupDemoComponent implements OnInit {
  form = createForm();

  formGroup = new FormGroup({});

  FormItem = FormItemComponent2;
  Input = InputComponent;
  TextArea = TextAreaComponent;
  Password = PasswordComponent;
  Select = SelectComponent;
  TreeSelect = TreeSelectComponent;
  NumberPicker = InputNumberComponent;

  constructor() { }

  ngOnInit(): void {
  }

  now() {
    return Date.now();
  }

  onObjectFieldAdd(field: ObjectField) {
    const name = get(this.form.values, '_propertyName');
    if (name && !this.form.existValuesIn(`${field.path}.${name}`)) {
      field.addProperty(name, '');
      this.form.deleteValuesIn('_propertyName');
    }
  }

  switchLayoutVisible() {
    this.form.query('layout').take().setState(state => {
      state.visible = !state.visible
    })
  }
}
