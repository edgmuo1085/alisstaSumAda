import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCompanies',
})
export class FilterCompaniesPipe implements PipeTransform {
  transform(value: any[], properties: string[], term: string) {
    return value.filter(v => properties.some(p => this.matchItem(v, p, term)));
  }

  /**
   * Comprueba que el término de búsqueda indicado se encuentre como subcadena de caracteres
   * dentro de la propiedad y objeto proporcionado. Esto significa que todos los valores de
   * las propiedades del objeto serán convertidas en su representación a cadena de caracteres,
   * por lo que si la propiedad es un objeto complejo la búsqueda no se efectuará y se omitirá
   * esta búsqueda.
   *
   * @param item
   * @param property
   * @param term
   * @returns
   */
  private matchItem(item: { [key: string]: any }, property: string, term: string): boolean {
    if (!term) {
      return true;
    }

    if (item[property] === undefined || item[property] === null) {
      return false;
    }

    const value: string = item[property].toString().toLowerCase();

    return value.includes(term.toLowerCase());
  }
}
