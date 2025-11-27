import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CryptoService } from '../crypto/crypto.service';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { ApiUrlService } from '../apiUrl/api-url.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private apiUrl: ApiUrlService
  ) {}

  /**
   * Envía las credenciales encriptadas al backend tal como tu implementación original.
   * employerID: nitEmpresa
   */
  login(employerID: number, userID: string, password: string): Observable<any> {
    const rq = {
      nitEmpresa: employerID,
      documentoEmpleado: userID,
      pass: password,
    };

    // Usamos tu CryptoService exactamente como en el archivo original
    const userInfo = CryptoService.encrypt(rq);
    const rqEncrypted = { idRegistro: userInfo };

    return this.apiUrl.loginUrl$.pipe(
      take(1),
      switchMap((loginUrl: string) =>
        this.http.post(loginUrl, rqEncrypted).pipe(
          map((response: string) => {
            const decryptedResponse = CryptoService.decrypt(response);
            return decryptedResponse;
          }),
          catchError(error => {
            console.log('Error en el login: ', JSON.stringify(error, null, 2));
            const errorResponse = {
              error: true,
              header: error.error ? 'Error al procesar la solicitud' : 'Usuario o contraseña inválida',
              message: error.error
                ? error.error.mensaje || 'Hubo un error al procesar las credenciales, por favor intente más tarde.'
                : 'Su usuario o contraseña no son correctos. Por favor intente nuevamente.',
            };
            return of(errorResponse);
          })
        )
      )
    );
  }

  // textEncript() {
  //   this.stringEncrit = CryptoService.encrypt(this.user);
  //   return CryptoService.encrypt(this.user);
  // }
  // textDecrypt() {
  //   //  return CryptoService.decrypt(this.stringEncrit)
  //   const tes =
  //     '+eUyLFuAJj8DZGHEuzM2s7OCQWhPyOcdnF08NSkfCC6o0mK1VfKxVC8x7ggsJsqjnhJ/uWM0Rr/dnbaJVjlRgZsA8ZIqYBFqazIGSjcUZIiPVgcJiHBACk5rQMhQjRs0eMrWep8qm3Tc9/0gETPeywxZKsjzOtS4GCpv1PVGADKXo1pa8pttCkZKV5jVFUGspCIB4XKgQYvYui6KUT9vo/x3ufOh4Yk1o9UDGYlNnn0Ewq8YPjK6wJ5CeONYcK0r5pu6YxcIqzjcICtKO9RExt7rEgM7Ho3HP9QQXmxgh99X3zT2+PZvvXfJXHyUfBI0G7R9/N0NoeaIvO12g6QXsESEI3X+2CySsliY5y4d7fEejT64XBhgHcIVPrO2DqJ+kBOKdeRd+LpGQnBCvlGRSeLuTwSgL1PFykfuf1VUSmW2Yv/RtLcdb+rrtONsjf+Lp4c4x+vR4tIL8qeo0RORKzTOSV1dty4te4ypznBwK4pmvgB20W1nW+UpZu3thGNosvmpJxXshyxrTr5rwRAL4NF9TUPR2aM9J7vAgct1iMhTF1X16mkB0xhh5eZJS7bnVOt8K78H3NNO64tkUlUFzWWZLV+qDiFqN5F2q/twUeLfcjfYv/ntTi7k3q/+R/R1BlASFh2Et2MiGkrgzhpI8E+zyxvNblfJ4Jp08f+syMoaHzaE1C4WG/Lkb30O4FYyHauBb34OE2rtOH7nMSMtQaLRnRTVxMDJDJ6yJwB2jA+zdpa1cpcbe5jykFnThIG6X9T9vGTqHBzTQA4IDQgLnAJ52EM072PSf5sakc/FyL/Arzby1DB2aNXAQBCM1JLBbAUz+5XkfJszhWp7NRX+WQB82mXtWDYITBofxwXVcgtNtZHAiyWaT5zOQCcGY69fZkMxOeiwOcF5v+YA8ll2YLyHD9QXidf8gY0Ese1TXje28mHjaqqg04gZr2GHeMXOXEGRbOhLOzEMgE6znNM5Lnw4J/Ju9o3u2OQJT/rZUiHNunl9McqLmx6LfIaPEcZaBNwbVVJJ7xZ9c0XC/mmfSk7DZklFZVz27vRwzxQCnyn+xh27WZIE34eCOJmTz6ILt5cKTgZwyIZkVx2rQ8Xw57kcXy9ZBJ80G4EvPTFdxjwvYSTe7BwVmHcG/EHAq1VpiSNyimm5aJZDLjAAGQYNe4qYTO1mb4A/XRGvklDYaZb5Hh4YFSk7upJXqlHyNvhcTraW7pJl9iJov/Enqhqj2ZuU2sezwsv2x0meZtUYEokynhVJYI1GBTWXzp2ce467zvqPLS55eQL3AOyeb8XRCbEFycKqdXdUirxFBaUTWDI=';
  //   return CryptoService.decrypt(tes);
  // }
}
