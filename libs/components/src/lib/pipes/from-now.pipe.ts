import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: string | Date, format?: string): string | Date{
    if (!value) {
      return ;
    }

    moment.locale('zh-cn');
    try {
      if (format) {
        return moment(value, format).fromNow();
      } else {
        return moment(value).fromNow();
      }
    } catch (e) {
      return value;
    }
  }

}
