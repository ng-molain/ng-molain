import { Component, OnInit } from '@angular/core';
import {FormWidget} from "../../form-widget";

@Component({
  selector: 'ml-switch-widget',
  templateUrl: './switch-widget.component.html',
  styleUrls: ['./switch-widget.component.scss']
})
export class SwitchWidgetComponent extends FormWidget implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
