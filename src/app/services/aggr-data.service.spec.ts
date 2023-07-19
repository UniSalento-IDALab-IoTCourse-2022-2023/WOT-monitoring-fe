import { TestBed } from '@angular/core/testing';

import { AggrDataService } from './aggr-data.service';

describe('AggrDataService', () => {
  let service: AggrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
