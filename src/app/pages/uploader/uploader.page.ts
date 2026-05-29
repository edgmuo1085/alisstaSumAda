import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';;
import { v4 as uuidv4 } from 'uuid';
import { PhotoServiceService } from '../../services/attach/photo-service.service';
import { CacheService } from '../../services/cache/cache.service';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { FotoAdjunta, LoadedPDFInfo } from '../../intarfaces/interfaces';
import { ValidateFileTypeService } from 'src/app/services/activities/validateFileType/validateFileType.service';

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
    private ngZone: NgZone,
    private router: Router,
    private storage: Storage,
    private cacheService: CacheService,
    public photoService: PhotoServiceService,
    private actionSheetCtrl: ActionSheetController,
    private validateFileSv: ValidateFileTypeService
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

    // Filtrar PDFs de la actividad actual (nueva referencia)
    this.filesAdjuntos = adjuntosPDF.filter(
      documento => actividadSeleccionada.id === documento.idActividad
    );

    // Filtrar fotos de la actividad actual (nueva referencia)
    this.listaDocumentos = fotosAdjuntas.filter(
      imagenes => actividadSeleccionada.id === imagenes.idActividad
    );
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

  /**
   * @deprecated Usar {@link tomarFoto} en su lugar.
   * Este método queda solo como respaldo. No se usa desde el template.
   */
  async addPhotoToGallery() {
    this.accionARealizar = 'foto';
    this.disableButtons = true;
    try {
      this.foto = await this.photoService.addNewToGallery();
      this.fotosTomadas.push(this.foto);
    } catch (err) {
      console.error('❌ Error en addPhotoToGallery:', err);
    } finally {
      this.disableButtons = false;
    }
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
    // Buscar el idFoto
    const idFoto = photoSelected.foto?.idFoto;

    // Eliminar de listaDocumentos (nueva referencia)
    this.listaDocumentos = this.listaDocumentos.filter(doc => doc.foto?.idFoto !== idFoto);

    // También eliminar de fotosTomadas si existe allí (nueva referencia)
    this.fotosTomadas = this.fotosTomadas.filter(foto => {
      const fotoId = foto.foto ? foto.foto.idFoto : foto.idFoto;
      return fotoId !== idFoto;
    });

    // Actualizar cache
    this.cacheService.removeFotoAdjunta(idFoto);
  }

  deleteDocs(doctSelected: any) {
    const docId = doctSelected.documento.id;

    // Eliminar de filesAdjuntos (nueva referencia para forzar detección de cambios)
    this.filesAdjuntos = this.filesAdjuntos.filter(doc => doc.documento?.id !== docId);

    // Actualizar cache
    this.cacheService.removePDFAdjunto(docId);
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
    newInstance.onload = () => {
      // El FileReader sin Zone.js ejecuta onload fuera del NgZone de Angular,
      // por eso envolvemos el callback en ngZone.run() para que Angular detecte los cambios
      this.ngZone.run(async () => {
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
      });
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

    } catch (err: any) {
      console.error('❌ Error al tomar foto:', err);

      // Seguridad: forzar reset del servicio por si isTakingPhoto quedó en true
      this.photoService.forceReset();

      // Mostrar error específico al usuario (excepto cancelaciones)
      if (err && typeof err.message === 'string' && err.message.includes('cancelada')) {
        // No mostrar alerta si el usuario canceló
        console.log('Usuario canceló la toma de foto');
      } else {
        const errorMsg = (err && err.message) ? err.message : 'Error al tomar la foto';
        this.notification('Error', errorMsg);
      }


    } finally {
      this.disableButtons = false;
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
    const tipoArchivo = this.validateFileSv.validateFileType(tipoSeleccionado);
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

    // Agregar a la lista visible (nueva referencia para detectar cambios)
    this.filesAdjuntos = [...this.filesAdjuntos, objGuardarDocumento];

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
    const tipoArchivo = this.validateFileSv.validateFileType(tipoSeleccionado);

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

      // Agregar a la lista (nueva referencia para detectar cambios)
      this.listaDocumentos = [...this.listaDocumentos, objGuardar];

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
