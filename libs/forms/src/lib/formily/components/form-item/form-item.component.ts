import {Component, Inject, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {CdkPortalOutlet, ComponentPortal, DomPortal, TemplatePortal} from "@angular/cdk/portal";
import {DECORATOR_PROPS, FieldRef} from "../../types";
import {Field} from "@formily/core";

@Component({
  selector: 'ml-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent2 implements OnInit {

  @ViewChild(CdkPortalOutlet) outlet!: CdkPortalOutlet;

  constructor(private fieldRef: FieldRef<any>,
              @Inject(DECORATOR_PROPS) private props: any) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  get label(): string {
    return this.props.label;
  }

  ngOnInit(): void {
  }

}
