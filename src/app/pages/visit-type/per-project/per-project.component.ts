import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CacheService } from 'src/app/services/cache/cache.service';

/**
 * Componente de la vista de tipo de visita por proyecto.
 */
@Component({
  selector: 'app-per-project',
  templateUrl: './per-project.component.html',
  styleUrls: ['./per-project.component.scss'],
})
export class PerProjectComponent implements OnInit {
  date;

  dateSelected: any;

  @Output() projectDateSelected = new EventEmitter();
  @Output() showButtonNext = new EventEmitter();

  /**
   * Basicamente estas variable se utilizan para darle las opciones del campo de ion-datatime
   */
  customPickerOptionsProjectDate: any;

  /**
   * Generar la hora inicial para la asesoría especifica
   * date, es la variable con la que se valida que no se pueda seleccionar una fecha que ya paso.
   */
  dateSelectedProject: Date = new Date();
  currentYear: any = new Date().getFullYear();

  rangeYear: any;

  constructor(private cacheService: CacheService) {}

  ngOnInit() {
    const infoVisitType = this.cacheService.getSaveTypeAdvice();

    if (Object.keys(infoVisitType).length !== 0) {
      if (infoVisitType.type === 'Proyecto') {
        this.setDate(infoVisitType.date);
      }
    }
  }

  dateSelectec(event) {
    this.setDate(event.detail.value);
  }

  private setDate(date: string): void {
    this.date = new Date(date).toISOString();
    this.projectDateSelected.emit(this.date);
    this.showButtonNext.emit(true);
  }
}
