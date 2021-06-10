import { TestBed } from '@angular/core/testing';

import { ArbreServiceService } from './arbre-service.service';

describe('ArbreServiceService', () => {
  let service: ArbreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
