import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'municipiosFilter',
})
export class MunicipiosFilterPipe implements PipeTransform {
  transform(municipios: any[], departamento: any) {
    return municipios.filter(m => m.IdDepartamento === departamento.Pk_Id_Departamento);
  }
}
