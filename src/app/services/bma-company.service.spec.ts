import { TestBed } from '@angular/core/testing';

import { BmaCompanyService } from './bma-company.service';

describe('BmaCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmaCompanyService = TestBed.get(BmaCompanyService);
    expect(service).toBeTruthy();
  });
});
