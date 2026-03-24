import { Injectable } from '@angular/core';
import { ParsedResponse } from 'src/app/intarfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ResponseToObject {


  responseParser(response: any): ParsedResponse {

    console.log("Al servcio llego la response: ", response)

    const [
      responseBoolean,
      idActa,
      idEmpresa,
      pendiente,
      acumulado,
      idActividadMigUsuario,
      modulo
    ] = response;

    const parsedResponse: ParsedResponse = {
      responseBoolean: responseBoolean === 'true',
      idActa: Number(idActa),
      idEmpresa: Number(idEmpresa),
      pendiente: Number(pendiente),
      acumulado: Number(acumulado),
      idActividadMigUsuario: Number(idActividadMigUsuario),
      modulo: String(modulo)
    };

    return parsedResponse

  }

}
