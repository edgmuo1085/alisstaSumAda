import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { v4 as uuidv4 } from 'uuid';
import { PhotoServiceService } from '../../services/attach/photo-service.service';
import { CacheService } from '../../services/cache/cache.service';
import { Directory, Filesystem } from '@capacitor/filesystem';

/**
 * Componente para carga de soportes de visita.
 */
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  /**
   * Opciones para la ventana emergente para seleccionar el tipo de archivo.
   */
  readonly ALERT_OPTIONS = {
    header: 'Seleccione el tipo de soporte',
    message: 'Los soportes marcados con (*) son obligatorios'
  };

  formSupportType: FormGroup;

  urlFile: any;

  fileAttach: any[] = [];

  filesAdjuntos: any[] = [];

  private blob: Blob;

  private promise: Promise<string>;

  infoActivity: any;

  lineaAccion: string;

  asistenteEventosPYP = false;

  evaluacionEventos = false;

  disableButtons = true;

  nameSupport: string;

  supportTypeTypes: any[] = [];

  fotosTomadas: any[] = [];

  listaDocumentos: any[] = [];

  accionARealizar: string;

  archivo: any;

  foto: any;

  extensionFile: string;

  @ViewChild('inputFile') inputFile: ElementRef;

  constructor(
    private file: File,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: Storage,
    private cacheService: CacheService,
    public photoService: PhotoServiceService
  ) { }

  ionViewWillEnter() {
    this.cargarInformación();
    this.lineaAccion = this.cacheService.actionLine;
  }

  ngOnInit() {
    this.infoActivity = this.cacheService.infoActivityAtachSelected;
    this.createFormSupportType();
    this.getListaArchivosSoporte();
  }

  cargarInformación() {
    const adjuntosPDF = this.cacheService.obtenerAdjuntosPDF();
    const actividadSeleccionada = this.cacheService.obtenerInfoActividadAttachDocs();
    const fotosAdjuntas = this.cacheService.obtenerAdjuntosFoto();
    if (adjuntosPDF.length > 0) {
      this.filesAdjuntos = [];

      adjuntosPDF.forEach(element => {
        element.forEach(documento => {
          if (actividadSeleccionada.id === documento.idActividad) {
            this.filesAdjuntos.push(documento);
          }
        });
      });

    }
    if (fotosAdjuntas.length > 0) {
      this.listaDocumentos = [];
      // this.listaDocumentos = fotosAdjuntas[0];
      fotosAdjuntas.forEach(element => {
        element.forEach(imagenes => {
          if (actividadSeleccionada.id === imagenes.idActividad) {
            this.listaDocumentos.push(imagenes);
            this.fotosTomadas.push(imagenes);
          }
        });
      });
    }
  }

  createFormSupportType() {
    this.formSupportType = this.formBuilder.group({
      type: ['']
    });
  }

  async getListaArchivosSoporte() {
    this.supportTypeTypes = await this.storage.get('listArchivosSoporte');
  }

  changeSupport(event) {
    this.nameSupport = event.detail.value;
    if (this.lineaAccion === 'ED') {
      if (event.detail.value === 'Asistencia a eventos de PyP') {
        this.asistenteEventosPYP = true;
      }
      if (event.detail.value === 'Evaluación de eventos') {
        this.evaluacionEventos = true;
      }
    }
  }

  async addPhotoToGallery() {
    this.accionARealizar = 'foto';
    this.disableButtons = true;
    this.foto = await this.photoService.addNewToGallery();
    this.fotosTomadas.push(this.foto);
    this.disableButtons = false;
  }

  abrirExploradorArchivos() {
    this.accionARealizar = 'documento';
    const tag: any = document.getElementById('file-input');
    if (tag.value) {
      tag.value = '';
    }
    tag.click();
  }

  deletePhoto(photoSelected) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.fotosTomadas.length; i++) {
      const element = this.fotosTomadas[i];
      const valorBuscar = photoSelected.foto;
      const idFoto = element.foto ? element.foto.idFoto : element.idFoto;

      if (idFoto === valorBuscar.idFoto) {
        this.fotosTomadas.splice(i, 1);
        this.listaDocumentos.splice(i, 1);
        this.cacheService.removeFotoAdjunta(valorBuscar.idFoto);
      }
    }
  }

  deleteDocs(doctSelected) {
    const valorBuscar = doctSelected;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.filesAdjuntos.length; i++) {
      const element = this.filesAdjuntos[i];
      if (element === valorBuscar) {
        this.filesAdjuntos.splice(i, 1);
        this.fileAttach.splice(i, 1);
        this.cacheService.removePDFAdjunto(valorBuscar.documento.id);
      }
    }
  }

  getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
  }

  loadImageFromDevice(event) {
    let objFile = {};

    const file = event.target.files[0];
    const peso = file.size / 1048576;
    if (peso < 1) {
      this.disableButtons = true;
      const newInstance = this.getFileReader();
      newInstance.readAsDataURL(event.target.files[0]);
      newInstance.onload = () => {
        const urlFileBase64 = newInstance.result.toString();
        this.extensionFile = urlFileBase64.split(',')[0];
        const realData = urlFileBase64.split(',')[1];
        const contentype = urlFileBase64.split(',')[0];
        const contentype1 = contentype.split(';');
        const contentype2 = contentype1[0].split(':');
        this.blob = this.b64toBlob(realData, contentype2[1]);
        // this.createDirectoryForActivitieSelected(this.infoActivity.id, blob, extensionBase64);
      };
      setTimeout(() => {
        objFile = {
          id: uuidv4(),
          file,
          blob: this.blob,
          extension: this.extensionFile,
          fileAsistenciaEventos: this.asistenteEventosPYP,
          fileEvaluacionEventos: this.evaluacionEventos
        };
        this.archivo = objFile;
        this.fileAttach.push(objFile);
        this.disableButtons = false;
      }, 3000);
    } else {
      this.inputFile.nativeElement.value = '';
      this.notification('Atención', 'El archivo supera el limite permitido de 1MB');
    }

  }

  b64toBlob(b64Data, contentType) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    const sliceSize = 512;
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  async createDirectoryForActivitieSelected(idActividad, blob, extensionBase64, idTipoArchivo) {
    try {
      const UUID = `${idActividad}` + '-' + (new Date().getTime()).toString(16);

      await Filesystem.writeFile({
        path: `${idActividad}/${UUID}.pdf`,
        directory: Directory.Data,
        data: await this.blobToBase64(blob),
        recursive: true
      });

      const objetoActividad = {
        idActividad,
        nombreArchivo: UUID + '.pdf',
        tipoDocumento: idTipoArchivo,
        extensionBase64
      };

      this.cacheService.saveAttachDocs(objetoActividad);
    } catch (e) {
      console.log(e);
    }
  }


  adjuntar() {

    const documentosAdjuntos = this.listaDocumentos.concat(this.filesAdjuntos);

    if (documentosAdjuntos.length < 6) {
      const tipoArchivo = this.validarTipoArchivo(this.formSupportType.get('type').value);

      if (tipoArchivo) {
        if (this.accionARealizar === 'foto') {

          const objGuardar = {
            idActividad: this.infoActivity.id,
            tipoArchivo,
            idTipoArchivo: this.formSupportType.get('type').value,
            foto: this.foto
          };
          this.listaDocumentos.push(objGuardar);
          this.formSupportType.get('type').reset();
          return;

        }

        if (this.accionARealizar === 'documento') {
          const objGuardarDocumento = {
            idActividad: this.infoActivity.id,
            tipoArchivo,
            idTipoArchivo: this.formSupportType.get('type').value,
            documento: this.archivo
          };
          this.filesAdjuntos.push(objGuardarDocumento);
          this.archivo = undefined;
          this.formSupportType.get('type').reset();
          return;
        }
      } else {
        this.notification('Atención', 'No puede adjuntar el documento sin seleccionar un tipo de archivo');
      }


    } else {
      this.notification('Alerta', 'No se pueden adjuntar mas de 6 documentos');
      this.formSupportType.get('type').reset();
      const tag: any = document.getElementById('file-input');
      if (tag.value) {
        tag.value = '';
      }
    }


  }

  save() {

    this.filesAdjuntos.forEach(element => {
      this.createDirectoryForActivitieSelected(
        this.infoActivity.id,
        element.documento.blob,
        element.documento.extension,
        element.idTipoArchivo
      );
    });

    const documentosAdjuntos = this.listaDocumentos.concat(this.filesAdjuntos);

    const objSoportesPorActividad = {
      idActividad: this.infoActivity.id,
      cantidadDocumentosAdjuntos: documentosAdjuntos.length
    };


    // this.cacheService.infoDocumentosPorActividad = [];
    this.cacheService.infoActividadPorDocumento(objSoportesPorActividad);

    // this.cacheService.fotosAdjuntas = [];
    this.cacheService.infoFotosAdjuntas(this.listaDocumentos);

    // this.cacheService.pdfAdjuntos = [];
    this.cacheService.infoPDFAdjuntos(this.filesAdjuntos);

    this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/subjects');
  }

  validarTipoArchivo(tipo) {
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
      default:
        break;
    }

  }

  async notification(titulo, notificacion) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR']
    });

    alert.onDidDismiss();

    await alert.present();
  }

  /**
   * Convierte una respresentación _Blob_ a su par _Base64_.
   *
   * @param blob Representación _Blob_.
   */
  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, _) => {
      const reader = this.getFileReader();
      reader.onloadend = () => resolve(reader.result.toString());
      reader.readAsDataURL(blob);
    });
  }

}


