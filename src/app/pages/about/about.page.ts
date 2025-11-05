import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';
import { App } from '@capacitor/app';

/**
 * Componente de vista de Acerca de.
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPageComponent implements OnInit, OnDestroy {
  /**
   * Versión actual de la aplicación.
   */
  versionNumber: string;

  constructor(private navbarService: NavbarService) {}

  async ngOnInit(): Promise<void> {
    this.navbarService.setVisibility(false);
    await this.loadAppVersion();
  };

  ngOnDestroy(): void {
    this.navbarService.setVisibility(true);
  };

  private async loadAppVersion() {
    try {
      const info = await App.getInfo();
      this.versionNumber = info.version;
      console.log('Versión de la app:', info.version, 'Build:', info.build);
    } catch (error) {
      console.error('Error al obtener la versión de la app:', error);
      this.versionNumber = 'No disponible';
    }
  }
}
