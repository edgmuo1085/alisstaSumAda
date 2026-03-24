/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResponseToObject } from './updateActivityHours.service';

describe('Service: UpdateActivityHours', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseToObject]
    });
  });

  it('should ...', inject([ResponseToObject], (service: ResponseToObject) => {
    expect(service).toBeTruthy();
  }));
});
