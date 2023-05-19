import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CompaniesService } from 'src/app/services/companies/companies.service';

/**
 * Componente para la vista de listado de personas de contacto para la empresa actual.
 */
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage {

  /**
   * Listado de contactos.
   */
  contacts: any[];

  /**
   * Compañía actual.
   */
  private company: any;

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private router: Router,
    private alertCtrl: AlertController,
    private ref: ChangeDetectorRef
  ) { }

  ionViewWillEnter(): void {
    this.getContacts();
  }

  /**
   * Redirige a la vista para crear un nuevo contacto.
   */
  add(): void {
    this.edit();
  }

  /**
   * Redirige a la vista de edición de contactos.
   *
   * @param id Número del documento del contacto a editar.
   */
  edit(id?: string): void {
    this.router.navigate(['edit-contact'], { relativeTo: this.route, queryParams: { id } });
  }

  /**
   * Elimina el contacto indicado de la lista de contactos para esta empresa.
   *
   * @param contact 
   */
  async remove(contact: any): Promise<void> {
    const drop = (): void => {
      const index = this.contacts.findIndex(c => c === contact);
      this.contacts.splice(index, 1);

      const updated = this.company.__updated ?? [];
      const found = updated.find((m: string) => m === 'contact-data');

      if (!found) {
        updated.push('contact-data');
        this.company.__updated = updated;
      }

      this.ref.detectChanges();
    };

    const alert = await this.alertCtrl.create({
      header: 'Atención',
      mode: 'ios',
      message: '¿Realmente desea eliminar este contacto?',
      buttons: [
        { text: 'Eliminar', role: 'drop', handler: drop },
        { text: 'Cancelar', role: 'cancel' }
      ]
    });

    await alert.present();
  }

  /**
   * Cancela la edición de personas de contacto para la empresa.
   */
  cancel(): void {
    const id = this.route.snapshot.params.id;
    this.router.navigate([`/u/companies/list/${id}`], { replaceUrl: true });
  }

  /**
   * Obtiene el nombre completo del contacto.
   *
   * @param contact Contacto.
   */
  getContactName(contact: any): string {
    const primerNombre = contact.strPrimerNombre ?? '';
    const segundoNombre = contact.strSegundoNombre ?? '';
    const primerApellido =  contact.strPrimerApellido ?? '';
    const segundoApellido = contact.strSegundoApellido ?? '';
    let name = `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;
    name = name.replace(/\s+/g, ' ');
    name = name.trim();

    return name;
  }

  /**
   * Establece el listado de contactos para esta empresa.
   */
  private async getContacts(): Promise<void> {
    const id = +this.route.snapshot.params.id;

    try {
      this.company = await this.companiesService.prepareCompany(id);
    } catch {
      this.company = this.companiesService.company;
    }

    if (!this.company) {
      this.cancel();

      return;
    }

    this.contacts = this.company.listaPersonasContacto;
  }

}
