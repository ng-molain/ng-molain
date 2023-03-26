import {Pipe, PipeTransform} from '@angular/core';
import {merge} from "lodash-es";
import {seqToChar} from "../utils";

export interface SequenceLabelOptions {
  type: 'A..Z' | 'a..z';
  offset?: number; // default 0
  prefix?: string;
  suffix?: string;
}

export const DEFAULT_SEQ_LABEL_OPTIONS: SequenceLabelOptions = {
  type: 'A..Z',
  offset: 0
}

@Pipe({
  name: 'sequenceLabel, seqLabel'
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
      default:
        label = `${value}`;
    }

    return `${prefix}${label}${suffix}`;
  }

  private getAZLabel(value: number) {
    return seqToChar(value);
  }

}
