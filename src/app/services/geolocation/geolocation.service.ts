import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Platform } from '@ionic/angular';
import { Coords, GeolocationResult } from 'src/app/intarfaces/interfaces';


@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor(private platform: Platform) {} // <-- Quitar AlertController

  async getGeolocation(): Promise<GeolocationResult> {
    try {
      let coords: Coords;

      // Verificar si estamos en un navegador web
      if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
        // Usar API del navegador para web
        coords = await this.getBrowserGeolocation();
      } else {
        // Usar Capacitor para dispositivos nativos
        coords = await this.getNativeGeolocation();
      }

      return {
        success: true,
        coords: coords
      };

    } catch (error: any) {
      return this.handleGeolocationError(error);
    }
  }

  private async getBrowserGeolocation(): Promise<Coords> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject({ 
          code: 'NOT_SUPPORTED', 
          message: 'Geolocalización no soportada en este navegador' 
        });
        return;
      }

      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        error => {
          let errorCode = 'UNKNOWN_ERROR';
          let errorMessage = 'Error obteniendo ubicación';

          switch (error.code) {
            case 1: // PERMISSION_DENIED
              errorCode = 'PERMISSION_DENIED';
              errorMessage = 'Permiso de ubicación denegado';
              break;
            case 2: // POSITION_UNAVAILABLE
              errorCode = 'POSITION_UNAVAILABLE';
              errorMessage = 'Información de ubicación no disponible';
              break;
            case 3: // TIMEOUT
              errorCode = 'TIMEOUT';
              errorMessage = 'Tiempo de espera agotado';
              break;
          }

          reject({ 
            code: errorCode, 
            message: errorMessage,
            originalError: error 
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    });
  }

  private async getNativeGeolocation(): Promise<Coords> {
    // Verificar permisos primero
    const permissionStatus = await Geolocation.checkPermissions();

    if (permissionStatus.location !== 'granted') {
      const requestStatus = await Geolocation.requestPermissions();

      if (requestStatus.location !== 'granted') {
        throw { 
          code: 'PERMISSION_DENIED', 
          message: 'Permisos de ubicación no concedidos' 
        };
      }
    }

    const response = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
    });

    return {
      lat: response.coords.latitude,
      lng: response.coords.longitude,
    };
  }

  // Método para manejar errores - SIN alertas
  private handleGeolocationError(error: any): GeolocationResult {
    console.error('Error en geolocalización:', error);

    // Si ya es un GeolocationResult, retornarlo directamente
    if (error.success !== undefined) {
      return error;
    }

    // Mapear errores a códigos estándar
    const errorCode = error.code || 'UNKNOWN_ERROR';
    const errorMessage = error.message || 'Error desconocido al obtener ubicación';

    return {
      success: false,
      error: errorMessage,
      errorCode: errorCode
    };
  }
}