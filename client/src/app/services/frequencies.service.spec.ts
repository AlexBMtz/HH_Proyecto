import { TestBed } from '@angular/core/testing';

import { FrequenciesService } from './frequencies.service';

describe('FrequenciesService', () => {
  let service: FrequenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
