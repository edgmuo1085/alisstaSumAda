import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recommendationType',
})
export class RecommendationTypePipe implements PipeTransform {
  transform(texto: any): any {
    return texto.charAt(0);
  }
}
