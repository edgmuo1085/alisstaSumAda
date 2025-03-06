import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchResendCode',
})
export class SearchResendCodePipe implements PipeTransform {
  transform(listResponsables: any[], texto: string, properties: string[]): any {
    if (!listResponsables) return [];
    if (!texto) return listResponsables;

    const lowerTexto = texto.toLowerCase();

    return listResponsables.filter(item =>
      properties.some(prop => item[prop]?.toLowerCase()?.includes(lowerTexto))
    );
  }
}
