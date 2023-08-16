import { TestBed } from '@angular/core/testing';

import { CharcatersService } from './charcaters.service';

describe('CharcatersService', () => {
  let service: CharcatersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharcatersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
