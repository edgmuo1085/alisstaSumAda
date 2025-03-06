import { TestBed } from '@angular/core/testing';

import { ActivityListCompanyService } from './activity-list-company.service';

describe('ActivityListCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityListCompanyService = TestBed.get(ActivityListCompanyService);
    expect(service).toBeTruthy();
  });
});
