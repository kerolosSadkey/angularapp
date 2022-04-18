import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(value: string): string {

   let st =value.replace(/(\d{4}(?!\s))/g, "$1-");

  
    return st;
  }

}
