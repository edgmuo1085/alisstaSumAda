// import { Injectable } from '@angular/core';
// import { AlertController } from '@ionic/angular';

// interface Paso {
//   titulo: string;
//   estado: 'pendiente' | 'procesando' | 'completado' | 'error';
// }

// @Injectable({ providedIn: 'root' })
// export class ProcessTrackerService {
//   private pasos: Paso[] = [];
//   private alert?: HTMLIonAlertElement;

//   constructor(private alertCtrl: AlertController) {}

//   async iniciar(pasosTitulos: string[]) {
//     this.pasos = pasosTitulos.map(t => ({ titulo: t, estado: 'pendiente' }));

//     this.alert = await this.alertCtrl.create({
//       header: 'Procesando',
//       message: this.renderHtml(),
//       backdropDismiss: false,
//     });

//     await this.alert.present();
//   }

//   async procesandoPaso(i: number) {
//     this.pasos[i].estado = 'procesando';
//     this.updateAlert();
//   }

//   async completarPaso(i: number) {
//     this.pasos[i].estado = 'completado';
//     this.updateAlert();
//   }

//   async errorPaso(i: number) {
//     this.pasos[i].estado = 'error';
//     this.updateAlert();
//   }

//   async finalizar(header = 'Proceso finalizado') {
//     if (this.alert) {
//       this.alert.header = header;
//       this.updateAlert();
//       setTimeout(() => this.alert?.dismiss(), 2000); // cerrar automático
//     }
//   }

//   private updateAlert() {
//     if (this.alert) {
//       this.alert.message = this.renderHtml();
//     }
//   }

//   private renderHtml(): string {
//     return this.pasos
//       .map(
//         p => `<p>
//           ${p.titulo}:
//           <strong style="color:${
//             p.estado === 'completado'
//               ? 'green'
//               : p.estado === 'error'
//               ? 'red'
//               : p.estado === 'procesando'
//               ? 'orange'
//               : 'gray'
//           }">${p.estado}</strong>
//         </p>`
//       )
//       .join('');
//   }
// }





//==========================================================================================

// import { Injectable } from '@angular/core';
// import { AlertController } from '@ionic/angular';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProcessTrackerService {
//   private alert: HTMLIonAlertElement | null = null;
//   private steps: string[] = [];
//   private currentStep = 0;

//   constructor(private alertController: AlertController) {}

//   // Inicia el flujo con el primer mensaje
//   async startProcess(initialMessage: string) {
//     this.steps = [initialMessage];
//     this.currentStep = 0;

//     this.alert = await this.alertController.create({
//       header: 'Procesando...',
//       message: this.steps[this.currentStep],
//       backdropDismiss: false,
//       buttons: []
//     });

//     await this.alert.present();
//   }

//   // Agrega un paso al flujo y actualiza el alert
//   async nextStep(message: string) {
//     this.steps.push(message);
//     this.currentStep = this.steps.length - 1;

//     if (this.alert) {
//       this.alert.message = this.steps[this.currentStep];
//     }
//   }

//   // Finaliza el proceso y cierra el alert
//   async finish(success: boolean, finalMessage: string) {
//     if (this.alert) {
//       this.alert.message = finalMessage;
//       this.alert.buttons = ['Aceptar'];
//       if (success) {
//         this.alert.header = '✔️ Éxito';
//       } else {
//         this.alert.header = '❌ Error';
//       }
//     }
//     this.steps = [];
//     this.currentStep = 0;
//     this.alert = null;
//   }
// }

//==========================================================================================

import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Step {
  text: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProcessTrackerService {
  private alert: HTMLIonAlertElement | null = null;
  private steps: Step[] = [];

  constructor(private alertController: AlertController) {}

  // Inicializar flujo
  async startProcess(initialStep: string) {
    this.steps = [{ text: initialStep, done: false }];

    this.alert = await this.alertController.create({
      header: 'Procesando...',
      message: this.renderSteps(),
      backdropDismiss: false,
      cssClass: 'process-alert',
      buttons: []
    });

    await this.alert.present();
  }

  // Agregar paso nuevo
  async addStep(step: string) {
    this.steps.push({ text: step, done: false });
    this.updateAlert();
  }

  // Marcar paso como completado
  async completeStep(index: number) {
    if (this.steps[index]) {
      this.steps[index].done = true;
      this.updateAlert();
    }
  }

  // Finalizar
  async finish(success: boolean, finalMessage: string) {
    if (this.alert) {
      this.steps.push({
        text: finalMessage,
        done: success
      });

      this.updateAlert();

      this.alert.buttons = ['Aceptar'];
      this.alert.header = success ? '✔️ Éxito' : '❌ Error';

      this.steps = [];
      this.alert = null;
    }
  }

  // Renderizar HTML dentro del Alert
//   private renderSteps(): string {
//     return `
//       <div style="text-align:left">
//         ${this.steps.map((s, i) => `
//           <div style="display:flex; align-items:center; margin:4px 0">
//             ${s.done 
//               ? '<ion-progress-bar value="1" color="success" style="width:30px; margin-right:8px"></ion-progress-bar>' 
//               : '<ion-progress-bar type="indeterminate" style="width:30px; margin-right:8px"></ion-progress-bar>'}
//             <span>${s.text}</span>
//           </div>
//         `).join('')}
//       </div>
//     `;
//   }

private renderSteps(): string {
  return `
    <div style="text-align:left; font-size:14px">
      ${this.steps.map((s, i) => {
        let icon = '';

        if (s.done) {
          // Paso completado → check verde
          icon = '<ion-icon name="checkmark-circle" style="color:green; font-size:18px; margin-right:8px"></ion-icon>';
        } else if (i === this.steps.findIndex(step => !step.done)) {
          // Paso activo → loader
          icon = '<ion-spinner name="dots" style="width:18px; height:18px; margin-right:8px"></ion-spinner>';
        } else {
          // Paso pendiente → círculo gris vacío
          icon = '<ion-icon name="ellipse-outline" style="color:gray; font-size:16px; margin-right:8px"></ion-icon>';
        }

        return `
          <div style="display:flex; align-items:center; margin:6px 0">
          <span>${s.text}</span>
          ${icon}
          </div>
        `;
      }).join('')}
    </div>
  `;
}



  private updateAlert() {
    if (this.alert) {
      this.alert.message = this.renderSteps();
    }
  }
}
