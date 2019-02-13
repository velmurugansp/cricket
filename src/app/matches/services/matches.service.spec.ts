import { TestBed } from '@angular/core/testing';

import { MatchServiceService } from './matches.service';

describe('MatchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchServiceService = TestBed.get(MatchServiceService);
    expect(service).toBeTruthy();
  });
});
