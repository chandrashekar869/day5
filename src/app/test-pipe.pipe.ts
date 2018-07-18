import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
  pure:false
})
export class TestPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    return value.filter(vehicle=>vehicle.type=='bike');
  }

}
