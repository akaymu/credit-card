import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: unknown, targetUnits: string): unknown {
    if (!value) {
      return '';
    }

    switch (targetUnits) {
      case 'card-number':
        return value.toString().replace(/\d{4}(?=.)/g, '$& ');
      case 'expiration-date':
        return value.toString().replace(/\d{2}(?=.)/g, '$&/');
      // return value.toString().replace(/(\d{2})(\d{2})/, '$1/$2');
      case 'security-code':
        return value;
      default:
        throw new Error('Target unit type not supported');
    }

  }

}
