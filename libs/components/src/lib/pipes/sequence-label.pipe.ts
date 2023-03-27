import {Pipe, PipeTransform} from '@angular/core';
import {merge} from "lodash-es";
import {seqToChar} from "../utils";
import {numberToChinese} from "../utils/string/number-to-chinese";

export interface SequenceLabelOptions {
  type: 'A..Z' | 'a..z' | '1..9' | '一..九';
  offset?: number; // default 0
  prefix?: string;
  suffix?: string;
}

export const DEFAULT_SEQ_LABEL_OPTIONS: SequenceLabelOptions = {
  type: 'A..Z',
  offset: 0
}

@Pipe({
  name: 'sequenceLabel'
})
export class SequenceLabelPipe implements PipeTransform {

  transform(index: number, _options?: SequenceLabelOptions, ...args: unknown[]): unknown {
    const options = merge({}, DEFAULT_SEQ_LABEL_OPTIONS, _options);
    const {type, offset, prefix, suffix} = options;
    const value = index + (offset ?? 0);

    let label: string;
    switch (type) {
      case "A..Z":
        label = this.getAZLabel(value);
        break;
      case "a..z":
        label = this.getAZLabel(value).toLowerCase();
        break;
      case '一..九':
        label = numberToChinese(value + 1);
        break;
      case "1..9":
      default:
        label = `${value + 1}`;
    }

    return `${prefix ?? ''}${label}${suffix ?? ''}`;
  }

  private getAZLabel(value: number) {
    return seqToChar(value);
  }

}
