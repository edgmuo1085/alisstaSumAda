import { TestBed } from '@angular/core/testing';

import { AdvisoryTopicService } from './advisory-topic.service';

describe('AdvisoryTopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvisoryTopicService = TestBed.get(AdvisoryTopicService);
    expect(service).toBeTruthy();
  });
});
