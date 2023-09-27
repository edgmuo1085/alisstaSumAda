import { Component, NgZone } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { CompaniesService } from 'src/app/services/companies/companies.service';

/**
 * Componente para la vista de detalles de empresa.
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  /**
   * Formulario.
   */
  formGroup: FormGroup;

  /**
   * Compañía actual.
   */
  company: any;

  /**
   * Indica si mostrar u ocultar detalles de esta empresa en la tarjeta.
   */
  showDetails: boolean;

  /**
   * Indica si deben saltarse las comprobaciones de cambios de empresa al salir de esta vista.
   * Estas comprobaciones se saltan cuando se sigue editando la empresa en otras vistas, como
   * la de datos de empresa o contacto.
   */
  private bypass: boolean;

  /**
   * Textos de ayuda.
   */
  private readonly HINTS = {
    direccion: {
      text: 'al dar clic tendrá la posibilidad de actualizar la dirección de la sede principal.',
      highlightedText: 'Estimado usuario: ',
    },
    actividad: {
      text: 'Para la modificación de la actividad económica de la empresa, se debe realizar a través de un proceso de reclasificación de empresa ante POSITIVA.',
      highlightedText: 'Recuerde: ',
    },
    sector: {
      text: 'Para la modificación del sector económico de la empresa, se debe realizar a través de un proceso de reclasificación de empresa ante POSITIVA.',
      highlightedText: 'Recuerde: ',
    },
  };

  constructor(
    private companiesService: CompaniesService,
    private route: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private ngZone: NgZone,
    private popoverCtrl: PopoverController
  ) {}

  ionViewWillEnter(): void {
    this.bypass = false;
    this.formGroup = undefined;
    this.getCompany();
  }

  /**
   * Navega a la siguiente vista de acuerdo a la selección del usuario.
   */
  nextPage(): void {
    const selection = this.formGroup.controls.nextPage.value;
    let path: string;

    switch (selection) {
      case 'companyData':
        path = './edit-company';

        break;
      case 'contactData':
        path = './contact-list';

        break;
    }

    this.bypass = true;
    this.router.navigate([path], { relativeTo: this.route });
  }

  /**
   * Comprueba que no hayan cambios pendientes por guardar. En caso de que los haya, consulta al
   * usuario si desea guardarlos para después o descartarlos.
   *
   * Regresa un valor booleano que indica si puede o no realizarse la navegación.
   */
  async canNavigate(): Promise<boolean> {
    if (this.bypass) {
      return true;
    }

    const updated = this.company?.__updated ?? [];

    if (!updated.length) {
      this.companiesService.discardChanges();

      return true;
    }

    const guardar = async (): Promise<void> => {
      result = await this.companiesService.saveChanges();

      if (!result) {
        const _alert = await this.alertCtrl.create({
          backdropDismiss: false,
          header: 'Atención',
          mode: 'ios',
          message: 'No tiene espacio suficiente en el dispositivo. Intente liberar memoria.',
          buttons: ['ACEPTAR'],
        });

        await _alert.present();
      }
    };

    const descartar = (): void => {
      this.companiesService.discardChanges();
      result = true;
    };

    let result: boolean;

    return new Promise(async resolve => {
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        mode: 'ios',
        backdropDismiss: false,
        message: 'Tiene cambios pendientes por guardar. ¿Desea guardarlos para después o descartarlos?',
        buttons: [
          {
            text: 'Guardar',
            handler: () => {
              alert.dismiss().then(async () => {
                await guardar();
                resolve(result);
              });

              return false;
            },
            role: 'save',
          },
          {
            text: 'Descartar',
            handler: () => {
              alert.dismiss().then(async () => {
                descartar();
                resolve(result);
              });

              return false;
            },
            role: 'cancel',
          },
        ],
      });

      await alert.present();
    });
  }

  /**
   * Indica si se han hecho cambios en el módulo indicado.
   *
   * @param key Nombre del módulo.
   */
  hasChangedModule(key: string): boolean {
    const updated = this.company.__updated ?? [];

    return updated.find((m: string) => m === key) !== undefined;
  }

  /**
   * Realiza la confirmación de los datos y presenta el resumen de carga.
   */
  async confirm(): Promise<void> {
    const _confirm = (): void => {
      this.ngZone.run(() => {
        this.bypass = true;
        this.router.navigate(['./signature'], { relativeTo: this.route });
      });
    };

    const alert = await this.alertCtrl.create({
      header: 'Estimado Usuario',
      mode: 'ios',
      backdropDismiss: false,
      message: '¿Está seguro de la confirmación de sus datos?',
      buttons: [
        { text: 'Aceptar', role: 'accept', handler: _confirm },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });

    await alert.present();
  }

  async showPopover(event: any, field: string): Promise<void> {
    const popover = await this.popoverCtrl.create({
      event,
      component: PopoverComponent,
      componentProps: { text: this.HINTS[field].text, highlightedText: this.HINTS[field].highlightedText },
    });

    await popover.present();
  }

  /**
   * Establece la empresa de la vista de detalles.
   */
  private async getCompany(): Promise<void> {
    const id = +this.route.snapshot.params.id;

    try {
      this.company = await this.companiesService.prepareCompany(id);
    } catch {
      this.company = this.companiesService.company;
    }

    if (!this.company) {
      this.router.navigate(['../']);

      return;
    }

    this.initForm();
  }

  /**
   * Inicializa el formulario.
   */
  private initForm(): void {
    const nextPageControl = new FormControl();
    this.formGroup = new FormGroup({ nextPage: nextPageControl });
  }
}
