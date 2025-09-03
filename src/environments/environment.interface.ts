export interface Ambiente {
  nombre: string;
  url: string;
  recoveryPass: string,
}

export interface Environment {
  production: boolean;

  // Ambientes de prueba
  ambientes: Ambiente[];
  ambienteSeleccionado: number;

  // Producción
  ambienteFijo: string;
}