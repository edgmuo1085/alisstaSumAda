import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from './navbar.service';

/**
 * Componente de barra de navegación.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit, OnDestroy {
  /**
   * Indica si mostrar u ocultar la barra de navegación.
   */
  show: boolean;

  /**
   * Suscripción al servicio de configuración de la barra de navegación.
   */
  navbarServiceSub: Subscription;

  constructor(private navbarService: NavbarService) {
    this.show = true;
  }

  ngOnInit(): void {
    this.navbarServiceSub = this.navbarService.show.subscribe(v => (this.show = v));
  }

  ngOnDestroy(): void {
    this.navbarServiceSub.unsubscribe();
  }
}
