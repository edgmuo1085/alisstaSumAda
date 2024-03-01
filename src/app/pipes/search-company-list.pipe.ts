import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCompanyList',
})
export class SearchCompanyListPipe implements PipeTransform {
  transform(companyXActivities: any[], texto: any, properties: string[], modulo?: string): any[] {
    if (!companyXActivities) {
      return [];
    }
    texto = texto ?? '';
    modulo = modulo ?? '';
    // if (!texto) { return companyXActivities; }
    return companyXActivities.filter(item => {
      let itemFound = false;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < properties.length; i++) {
        if (item[properties[i]].toLowerCase().indexOf(texto.toLowerCase()) !== -1) {
          if (modulo != '') {
            // tslint:disable-next-line: prefer-for-of
            if (item['Modulo'].toLowerCase().indexOf(modulo.toLowerCase()) !== -1) {
              itemFound = true;
              break;
            }
          } else {
            itemFound = true;
            break;
          }
        }
      }
      return itemFound;
    });
  }
}
