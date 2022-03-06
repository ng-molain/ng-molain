import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormRef, FormSchema, FormUISchema, UISchema} from "@ng-molain/forms";
import {formSchema, uiSchema} from "./setting-form.schema";


@Component({
  selector: 'ng-molain-setting-form-demo',
  templateUrl: './setting-form-demo.component.html',
  styleUrls: ['./setting-form-demo.component.scss']
})
export class SettingFormDemoComponent implements OnInit, AfterViewInit {

  @ViewChild("demoForm", {read: FormRef}) demoForm!: FormRef;

  size: 'small' | 'default' = 'default';

  schema: any;

  formSchema: any;
  uiSchema: any;

  value = {
    qIsSwitch: true
  };

  constructor() {
  }

  ngOnInit(): void {

    this.formSchema = formSchema;
    this.uiSchema = uiSchema;

    this.schema = {formSchema, uiSchema};
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.demoForm.rootControl.get('qIsSwitch').valueChanges.subscribe((val) => {
      if (val) {
        // @ts-ignore
        this.demoForm.rootControl.get('qType').enable();
      } else {
        // @ts-ignore
        this.demoForm.rootControl.get('qType').disable();
      }
    })
  }
}
