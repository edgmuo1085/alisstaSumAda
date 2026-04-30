import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateFileTypeService {

  validateFileType(tipo: string): string | undefined {
    switch (tipo) {
      case 'AEP':
        return 'Asistencia a eventos de P y P';
      case 'EE':
        return 'Evaluación de eventos';
      case 'CRSC':
        return 'Certificación de recibo a satisfacción cliente';
      case 'DIUEP1':
        return 'Diagnóstico integral UEP 1';
      case 'DIUEP2':
        return 'Diagnóstico integral UEP 2';
      case 'DIUEP3':
        return 'Diagnóstico integral UEP 3';
      case 'IT':
        return 'Informes Técnicos';
      case 'REPVE':
        return 'Registro de exámenes de programa de vigilancia epidemiológica';
      case 'SR':
        return 'Seguimiento recomendaciones';
      case 'ITR':
        return 'Informe Técnico de Reclasificación';
      case 'DT':
        return 'Documentación técnica';
      default:
        return undefined;
    }
  }

}
