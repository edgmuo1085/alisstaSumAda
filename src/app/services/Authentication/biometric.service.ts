// src/app/services/biometric/biometric.service.ts
import { Injectable } from '@angular/core';
import {
  NativeBiometric,
  AvailableResult
} from '@capgo/capacitor-native-biometric';

@Injectable({
  providedIn: 'root'
})
export class BiometricService {

  private SERVER_KEY = 'co.positiva.alisstasum.credentials';

  async isAvailable(): Promise<boolean> {
    try {
      const result: AvailableResult = await NativeBiometric.isAvailable();
      return !!result.isAvailable;
    } catch (err) {
      console.error('Biometric availability error:', err);
      return false;
    }
  }

  async verifyIdentity(): Promise<boolean> {
    try {
      await NativeBiometric.verifyIdentity({
        reason: 'Autenticación biométrica',
        title: 'Iniciar sesión',
        subtitle: 'Use su biometría',
        description: 'Autentíquese para continuar'
      });
      return true;
    } catch (err) {
      console.warn('Biometric verification failed:', err?.message ?? err);
      return false;
    }
  }

  /**
   * Guardar credenciales biométricas.
   * Ahora acepta employerId (nit) además de username/password y devuelve boolean.
   */
  async storeCredentials(employerId: string | number, username: string, password: string): Promise<boolean> {
    try {
      // Serializamos employerId + username en un único string (usernameField).
      const usernameField = JSON.stringify({ nit: String(employerId), user: username });

      await NativeBiometric.setCredentials({
        server: this.SERVER_KEY,
        username: usernameField,
        password
      });

      return true;
    } catch (err) {
      console.error('Error storing biometric credentials:', err);
      return false;
    }
  }

  /**
   * Obtener credenciales y devolver en forma { nit, username, password } o null.
   */
  async getCredentials(): Promise<{ nit: string; username: string; password: string } | null> {
    try {
      const result = await NativeBiometric.getCredentials({ server: this.SERVER_KEY });
      // result.username es el JSON que guardamos antes
      try {
        const parsed = JSON.parse(result.username);
        return {
          nit: parsed.nit,
          username: parsed.user,
          password: result.password
        };
      } catch (e) {
        console.log("Error parseando Username: ", e)
        // Si no es JSON (compatibilidad con versiones antiguas), intentar fallback:
        return {
          nit: '', // no disponible
          username: result.username,
          password: result.password
        };
      }
    } catch (err) {
      console.warn('No biometric credentials found or error reading them:', err);
      return null;
    }
  }

  async deleteCredentials(): Promise<void> {
    try {
      await NativeBiometric.deleteCredentials({ server: this.SERVER_KEY });
    } catch (err) {
      console.error('Error deleting biometric credentials:', err);
    }
  }
}
