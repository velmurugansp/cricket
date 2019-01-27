import { TestBed } from '@angular/core/testing';

import { MatchServiceService } from './match-service.service';

describe('MatchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchServiceService = TestBed.get(MatchServiceService);
    expect(service).toBeTruthy();
  });
});
