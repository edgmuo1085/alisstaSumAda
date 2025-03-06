import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';

/**
 * Componente para la vista de visita.
 */
@Component({
  selector: 'app-visit',
  templateUrl: './visit.page.html',
  styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {
  /**
   * Array de opciones del menú de ejecución de actividades
   */
  optMenuOptions: Observable<any[]>;

  constructor(private menuConfOptions: MenuConfiguracionService) {}

  ngOnInit() {
    this.optMenuOptions = this.menuConfOptions.getMenuActivitySelected();
  }

  optionSelectedMenu(itemSelected) {
    switch (itemSelected.title) {
      case '':
        // TODO: Implementar lógica para este caso
        break;
      default:
        // TODO: Implementar lógica para el caso por defecto
        break;
    }
  }
  
}
