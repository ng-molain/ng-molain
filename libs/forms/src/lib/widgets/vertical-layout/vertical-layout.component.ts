import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormRef} from "../../form-ref";

@Component({
  selector: 'ml-vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss']
})
export class VerticalLayoutComponent implements OnInit, OnChanges {
  get uiSchema(): any {
    return this._uiSchema;
  }

  @Input()
  set uiSchema(value: any) {
    this._uiSchema = value;

    if (this.uiSchema) {
      this.elements = this.uiSchema.elements || [];
    }
  }

  private _uiSchema: any;



  elements: any[] = [];

  constructor(public readonly formRef: FormRef) { }

  ngOnInit(): void {
    console.log(this.formRef)
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO 问题，没有触发
    console.log(this.uiSchema);
    if (this.uiSchema) {
      this.elements = this.uiSchema.elements || [];
    }
  }

}
