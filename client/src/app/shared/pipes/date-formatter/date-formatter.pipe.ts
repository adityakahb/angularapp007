import { Pipe, PipeTransform } from '@angular/core';
import { format as dateformat } from 'date-fns';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if ((value || '').length > 0 && (args[0] || '').length > 0) {
      return dateformat(new Date(value), args[0]);
    }
    return null;
  }

}
