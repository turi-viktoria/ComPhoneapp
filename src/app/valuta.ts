import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'my-currency'})

export class Valuta implements PipeTransform{
    static currency: "Ft";
    transform(value: number): string {
      return value+ " " + Valuta.currency;
    }


}