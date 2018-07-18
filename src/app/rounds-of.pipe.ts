import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundsOf'
})
export class RoundsOfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
