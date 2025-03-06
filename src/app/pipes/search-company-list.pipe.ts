import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCompanyList',
})
export class SearchCompanyListPipe implements PipeTransform {
  transform(companyXActivities: any[], texto = '', properties: string[], modulo = ''): any[] {
    if (!companyXActivities) return [];

    const lowerTexto = texto.toLowerCase();
    const lowerModulo = modulo.toLowerCase();

    return companyXActivities.filter(item =>
      properties.some(prop => {
        const value = item[prop]?.toLowerCase() ?? '';
        if (!value.includes(lowerTexto)) return false;

        return !modulo || item['Modulo']?.toLowerCase()?.includes(lowerModulo);
      })
    );
  }
}

