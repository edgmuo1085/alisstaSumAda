import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';
import { AppVersion } from '@ionic-native/app-version/ngx';

/**
 * Componente de vista de Acerca de.
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, OnDestroy {

  /**
   * Versión actual de la aplicación.
   */
  versionNumber: string;

  constructor(
    private appVersion: AppVersion,
    private navbarService: NavbarService
  ) {
    this.appVersion.getVersionNumber().then(v => this.versionNumber = v);
  }

  ngOnInit(): void {
    this.navbarService.setVisibility(false);
  }

  ngOnDestroy(): void {
    this.navbarService.setVisibility(true);
  }

}
