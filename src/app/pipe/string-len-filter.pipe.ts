import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLenFilter'
})
export class StringLenFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
        console.log(args);
        let str = '';

        if (value.length > args) {
           str = value.substring(0, args) + '...';
        } else {
           str = value;
         }


    return str;
  }

}
