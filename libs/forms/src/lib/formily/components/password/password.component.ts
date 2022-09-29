import {Component, Inject, OnInit} from '@angular/core';
import {Field} from "@formily/core";
import {getStrength} from "./password-strength";
import {PasswordProps} from "../types";
import {COMPONENT_PROPS, FieldRef} from "../../types";

@Component({
  selector: 'ml-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  passwordVisible: boolean = false;
  passwordStrength: number = 0;

  strengthTextFormat = (percent: number): string => {
    if (percent <= 0) {
      return '';
    } else if (percent <= 20) { return '非常弱' }
    else if (percent <= 40) {return '弱'}
    else if (percent <= 60) {return '一般'}
    else if (percent <= 80) {return '安全'}
    else {return '很安全'}
  }

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: PasswordProps) { }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {

  }

  onValueChange($event: any) {
    if (!this.props.checkStrength) {
      return ;
    }
    this.passwordStrength = getStrength($event);
  }
}
