import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrimmer'
})
export class TextTrimmerPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    if ((value || '').length > args[0]) {
      return value.substr(0, args[0]).replace(/^\s+|\s+$/g, '') + '...';
    } else {
      return value.replace(/^\s+|\s+$/g, '');
    }
    return null;
  }

}
