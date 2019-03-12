import { TestBed } from '@angular/core/testing';

import { ServicenameService } from './servicename.service';

describe('ServicenameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicenameService = TestBed.get(ServicenameService);
    expect(service).toBeTruthy();
  });
});
