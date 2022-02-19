import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ml-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent implements OnInit {

  @Input("mlLegend") legend?: string | null;
  @Input("mlFormItems") formItems: any[] = [];

  constructor() { }

  get isEmpty() {
    return !(this.formItems && this.formItems.length > 0);
  }

  ngOnInit(): void {
  }
}
