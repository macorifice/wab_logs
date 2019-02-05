import { TestBed } from '@angular/core/testing';

import { ReadfromglitchService } from './readfromglitch.service';

describe('ReadfromglitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadfromglitchService = TestBed.get(ReadfromglitchService);
    expect(service).toBeTruthy();
  });
});
