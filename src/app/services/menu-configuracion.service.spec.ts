import { TestBed } from '@angular/core/testing';

import { MenuConfiguracionService } from './menu-configuracion.service';

describe('MenuConfiguracionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuConfiguracionService = TestBed.get(MenuConfiguracionService);
    expect(service).toBeTruthy();
  });
});
