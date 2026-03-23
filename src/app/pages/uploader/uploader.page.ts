import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';;
import { v4 as uuidv4 } from 'uuid';
import { PhotoServiceService } from '../../services/attach/photo-service.service';
import { CacheService } from '../../services/cache/cache.service';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { FotoAdjunta, LoadedPDFInfo } from '../../intarfaces/interfaces';

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
    message: 'Los soportes marcados con (*) son obligatorios',
  };

  formSupportType: UntypedFormGroup;

  urlFile: string;

  fileAttach: any[] = [];

  filesAdjuntos: LoadedPDFInfo[] = [];

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

  listaDocumentos: FotoAdjunta[] = [];

  accionARealizar: string;

  archivo: any;

  foto: any;

  extensionFile: string;

  @ViewChild('inputFile') inputFile: ElementRef;

  constructor(
    private alertController: AlertController,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private storage: Storage,
    private cacheService: CacheService,
    public photoService: PhotoServiceService,
    private actionSheetCtrl: ActionSheetController
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

      adjuntosPDF.forEach(documento => {
        if (actividadSeleccionada.id === documento.idActividad) {
          this.filesAdjuntos.push(documento);
        }
      });
    }
    if (fotosAdjuntas.length > 0) {
      this.listaDocumentos = [];
      fotosAdjuntas.forEach(imagenes => {
        if (actividadSeleccionada.id === imagenes.idActividad) {
          this.listaDocumentos.push(imagenes);
        }
      });
    }
  }

  createFormSupportType() {
    this.formSupportType = this.formBuilder.group({
      type: [''],
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
    const tag = document.getElementById('file-input') as HTMLInputElement;
    if (tag && tag.value) {
      tag.value = '';
    }
    if (tag) {
      tag.click();
    }
  }

  deletePhoto(photoSelected: any) {
    // Buscar el índice en listaDocumentos usando idFoto
    const idFoto = photoSelected.foto.idFoto;
    const index = this.listaDocumentos.findIndex(doc => doc.foto?.idFoto === idFoto);

    if (index !== -1) {
      // Eliminar de listaDocumentos
      this.listaDocumentos.splice(index, 1);

      // También eliminar de fotosTomadas si existe allí
      const fotoIndex = this.fotosTomadas.findIndex(foto => {
        const fotoId = foto.foto ? foto.foto.idFoto : foto.idFoto;
        return fotoId === idFoto;
      });
      if (fotoIndex !== -1) {
        this.fotosTomadas.splice(fotoIndex, 1);
      }

      // Actualizar cache
      this.cacheService.removeFotoAdjunta(idFoto);
    }
  }

  deleteDocs(doctSelected: any) {
    const docId = doctSelected.documento.id;
    const index = this.filesAdjuntos.findIndex(doc => doc.documento?.id === docId);

    if (index !== -1) {
      // Eliminar de filesAdjuntos
      this.filesAdjuntos.splice(index, 1);

      // También eliminar de fileAttach si existe (usando el mismo índice)
      if (this.fileAttach.length > index) {
        this.fileAttach.splice(index, 1);
      }

      // Actualizar cache
      this.cacheService.removePDFAdjunto(docId);
    }
  }

  getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)['__zone_symbol__originalInstance'];
    return zoneOriginalInstance || fileReader;
  }

  async loadImageFromDevice(event: Event) {
    let objFile: any = {};

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) { return; }

    if (file.type !== 'application/pdf') {
      this.notification('Alerta', 'Señor usuario, solo se permiten subir archivos PDF');
      // limpiar input
      this.inputFile.nativeElement.value = '';
      return;
    }

    const peso = file.size / 1048576;
    if (peso >= 1) {
      this.inputFile.nativeElement.value = '';
      this.notification('Atención', 'El archivo supera el limite permitido de 1MB');
      return;
    }

    this.disableButtons = true;

    const newInstance = this.getFileReader();
    newInstance.readAsDataURL(file);
    newInstance.onload = async () => {
      try {
        const urlFileBase64 = newInstance.result.toString();
        this.extensionFile = urlFileBase64.split(',')[0];
        const realData = urlFileBase64.split(',')[1];
        const contentype = urlFileBase64.split(',')[0];
        const contentype1 = contentype.split(';');
        const contentype2 = contentype1[0].split(':');
        this.blob = this.b64toBlob(realData, contentype2[1]);

        objFile = {
          id: uuidv4(),
          file,
          blob: this.blob,
          extension: this.extensionFile,
          fileAsistenciaEventos: this.asistenteEventosPYP,
          fileEvaluacionEventos: this.evaluacionEventos,
        };

        this.archivo = objFile;
        // Adjuntar y guardar automáticamente
        await this.attachDocumentAndSave(this.archivo);

        // limpiar input
        this.inputFile.nativeElement.value = '';
      } catch (err) {
        console.error('Error procesando PDF:', err);
        this.notification('Error', 'No se pudo procesar el archivo');
      } finally {
        this.disableButtons = false;
      }
    };
  }

  b64toBlob(b64Data: string, contentType: string): Blob {
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

  async createDirectoryForActivitieSelected(idActividad: number, blob: Blob, extensionBase64: string, idTipoArchivo: string): Promise<void> {
    try {
      const UUID = `${idActividad}-${new Date().getTime().toString(16)}`;

      const base64Data = await this.blobToBase64(blob);

      await Filesystem.writeFile({
        path: `${idActividad}/${UUID}.pdf`,
        directory: Directory.Data,
        data: base64Data,
        recursive: true,
      });

      const objetoActividad = {
        idActividad,
        nombreArchivo: `${UUID}.pdf`,
        tipoDocumento: idTipoArchivo,
        extensionBase64,
      };

      this.cacheService.saveAttachDocs(objetoActividad);
    } catch (e) {
      console.error('Error creando directorio para actividad:', e);
      throw new Error('No se pudo guardar el archivo en el dispositivo');
    }
  }

  async adjuntar() {
    // Validación número máximo
    const documentosAdjuntos = (this.listaDocumentos as any[]).concat(this.filesAdjuntos as any[]);
    if (documentosAdjuntos.length >= 6) {
      this.notification('Alerta', 'No se pueden adjuntar mas de 6 documentos');
      return;
    }

    // ✅ PRIMERO validar tipo de archivo seleccionado
    const tipoSeleccionado = this.formSupportType.get('type').value;
    if (!tipoSeleccionado) {
      this.notification('Atención', 'Primero seleccione el tipo de archivo');
      return;
    }

    // Action Sheet simplificado
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccionar tipo de archivo',
      cssClass: 'my-custom-action-sheet',
      buttons: [
        {
          text: 'Tomar Foto',
          icon: 'camera-outline',
          handler: async () => {
            await this.tomarFoto();
          }
        },
        {
          text: 'Seleccionar PDF',
          icon: 'document-outline',
          handler: () => {
            this.abrirExploradorArchivos();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  // ✅ Método mejorado para tomar foto con manejo de errores
  async tomarFoto() {
    this.disableButtons = true;

    try {
      console.log('📸 Iniciando toma de foto...');

      // ✅ Tomar la foto con el servicio mejorado
      const foto = await this.photoService.addNewToGallery();

      console.log('✅ Foto tomada, procediendo a guardar...');

      // ✅ AHORA validar que el tipo de documento esté seleccionado
      const tipoSeleccionado = this.formSupportType.get('type').value;
      if (!tipoSeleccionado) {
        this.notification('Atención', 'Primero seleccione el tipo de archivo antes de adjuntar');
        return; // No guardamos la foto sin tipo
      }

      // ✅ Adjuntar y guardar automáticamente
      await this.attachPhotoAndSave(foto);

    } catch (err) {
      console.error('❌ Error al tomar foto:', JSON.stringify(err, null, 2));

      // Mostrar error específico al usuario (excepto cancelaciones)
      if (err.message.includes('cancelada')) {
        // No mostrar alerta si el usuario canceló
        console.log('Usuario canceló la toma de foto');
      } else {
        this.notification('Error', err.message);
      }

    } finally {
      this.disableButtons = false;
    }
  }


  validarTipoArchivo(tipo: string): string | undefined {
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
      default:
        return undefined;
    }
  }

  async notification(titulo: string, notificacion: string) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR'],
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
    return new Promise((resolve) => {
      const reader = this.getFileReader();
      reader.onloadend = () => resolve(reader.result.toString());
      reader.readAsDataURL(blob);
    });
  }

  private async attachDocumentAndSave(archivoObj: any) {
    // Validar que el tipo esté seleccionado
    const tipoSeleccionado = this.formSupportType.get('type').value;
    const tipoArchivo = this.validarTipoArchivo(tipoSeleccionado);
    if (!tipoArchivo) {
      this.notification('Atención', 'No puede adjuntar el documento sin seleccionar un tipo de archivo');
      return;
    }

    // Construir objeto para la lista
    const objGuardarDocumento: LoadedPDFInfo = {
      idActividad: this.infoActivity.id,
      tipoArchivo,
      idTipoArchivo: tipoSeleccionado,
      documento: archivoObj,
    };

    // Agregar a la lista visible
    this.filesAdjuntos.push(objGuardarDocumento);

    // Guardar físicamente el archivo (Filesystem) y actualizar cache
    try {
      await this.createDirectoryForActivitieSelected(
        this.infoActivity.id,
        archivoObj.blob,
        archivoObj.extension,
        tipoSeleccionado
      );

      // Actualizar el cache con la lista de pdf adjuntos (mantenemos el mismo formato que usabas)
      this.cacheService.infoPDFAdjuntos(this.filesAdjuntos);
      // Actualizar contador por actividad
      const totalDocumentos = this.listaDocumentos.length + this.filesAdjuntos.length;
      this.cacheService.infoActividadPorDocumento({
        idActividad: this.infoActivity.id,
        cantidadDocumentosAdjuntos: totalDocumentos,
      });

      // reset del select
      this.formSupportType.get('type').reset();
      this.notification('Éxito', 'Documento adjuntado y guardado correctamente');
    } catch (e) {
      console.error('Error guardando documento:', e);
      this.notification('Error', 'No se pudo guardar el documento');
    }
  }

  private async attachPhotoAndSave(foto: any) {
    // Validar tipo seleccionado
    const tipoSeleccionado = this.formSupportType.get('type').value;
    const tipoArchivo = this.validarTipoArchivo(tipoSeleccionado);

    if (!tipoArchivo) {
      this.notification('Atención', 'No puede adjuntar la foto sin seleccionar un tipo de archivo');
      this.disableButtons = false;
      return;
    }

    try {
      console.log('🔄 Iniciando attachPhotoAndSave...');

      // Construir objeto para guardar
      const objGuardar: FotoAdjunta = {
        idActividad: this.infoActivity.id,
        tipoArchivo,
        idTipoArchivo: tipoSeleccionado,
        foto: foto,
      };

      console.log('✅ Objeto creado, agregando a listaDocumentos...');

      // Agregar a la lista
      this.listaDocumentos.push(objGuardar);

      console.log('📝 Actualizando cache...');

      // Actualizar cache
      this.cacheService.infoFotosAdjuntas(this.listaDocumentos);

      const totalDocumentos = this.listaDocumentos.length + this.filesAdjuntos.length;
      this.cacheService.infoActividadPorDocumento({
        idActividad: this.infoActivity.id,
        cantidadDocumentosAdjuntos: totalDocumentos,
      });

      // Reset del select
      this.formSupportType.get('type').reset();

      console.log('🎉 Foto adjuntada exitosamente');

      this.notification('Éxito', 'Foto adjuntada correctamente');

    } catch (e) {
      console.error('❌ Error en attachPhotoAndSave:', e);
      this.notification('Error', 'No se pudo guardar la foto: ' + e.message);
    } finally {
      this.disableButtons = false;
      console.log('🔚 Finalizando attachPhotoAndSave');
    }
  }
}
