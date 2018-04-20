import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitchar'
})
export class LimitcharPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    return value.substr(0,limit).concat("...");
  }

}
