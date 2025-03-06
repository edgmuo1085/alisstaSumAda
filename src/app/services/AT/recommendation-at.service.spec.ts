import { TestBed } from '@angular/core/testing';

import { RecommendationATService } from './recommendation-at.service';

describe('RecommendationATService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendationATService = TestBed.get(RecommendationATService);
    expect(service).toBeTruthy();
  });
});
