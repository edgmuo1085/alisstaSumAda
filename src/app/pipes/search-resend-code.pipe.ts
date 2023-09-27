import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchResendCode',
})
export class SearchResendCodePipe implements PipeTransform {
  transform(listResponsables: any[], texto: any, properties: string[]): any {
    if (!listResponsables) {
      return [];
    }
    if (!texto) {
      return listResponsables;
    }

    return listResponsables.filter(item => {
      let itemFound = false;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < properties.length; i++) {
        if (item[properties[i]].toLowerCase().indexOf(texto.toLowerCase()) !== -1) {
          itemFound = true;
          break;
        }
      }
      return itemFound;
    });
  }
}
