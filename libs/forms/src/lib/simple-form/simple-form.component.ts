import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewContainerRef} from '@angular/core';
import {NzFormLayoutType} from "ng-zorro-antd/form";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NzFormControlsComponent} from "../widgets/nz-form-controls/nz-form-controls.component";
import {filter, tap} from "rxjs";
import {FormWidgetRegistry} from "../form-widget.registry";
import {FormControlDirective} from "../widgets/nz-form-controls/form-control.directive";

@Component({
  selector: 'ml-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  @Input() formProperties: any;
  @Input() nzLayout: NzFormLayoutType = 'horizontal';

  @Output() formSubmit = new EventEmitter<any>();

  structFormGroup: any;
  formGroup: FormGroup;
  formItems: any[] = [];

  constructor(private fb: FormBuilder,
              private viewContainerRef: ViewContainerRef,
              private widgetsRegistry: FormWidgetRegistry) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit(): void {
    this.formItems = [
      {type: 'fieldset', legend: '基础信息', items: [
          {type: 'text', title: '标题', key: 'title', schema: {type: 'text'}, ui: {}}
        ]}
    ];

    // 在这个场景下，放弃这个做法，仅使用 component 的方式
    // const ref = this.viewContainerRef.createComponent(NzFormControlsComponent);
    // // ref.
    // const inst = ref.instance;
    // // inst.ngAfterViewInit = () => {
    // //   console.log(inst.formControls.map(it => `~~~${it.name}`));
    // // };
    // inst.afterViewInit.pipe(
    //   tap((controls: QueryList<FormControlDirective>) => {
    //     console.log(inst.formControls.map(it => `~~~${it.name}`));
    //
    //     // register template to registry
    //     controls.forEach(it => {
    //       this.widgetsRegistry.register(it.name, it.templateRef);
    //     })
    //   })
    // ).subscribe();
  }

  submitForm($event: any) {
    // validate
    // emit submit
  }
}
