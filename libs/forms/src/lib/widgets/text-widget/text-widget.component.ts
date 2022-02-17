import { Component, OnInit } from '@angular/core';
import {FormWidget} from "../../form-widget";

@Component({
  selector: 'ml-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.scss']
})
export class TextWidgetComponent extends FormWidget implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
