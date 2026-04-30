/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateFileTypeService } from '../validateFileType.service';

describe('Service: ValidateFileType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateFileTypeService]
    });
  });

  it('should ...', inject([ValidateFileTypeService], (service: ValidateFileTypeService) => {
    expect(service).toBeTruthy();
  }));
});
