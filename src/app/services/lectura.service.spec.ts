import { TestBed, inject } from '@angular/core/testing';

import { LecturaService } from './lectura.service';

describe('LecturaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LecturaService]
    });
  });

  it('should be created', inject([LecturaService], (service: LecturaService) => {
    expect(service).toBeTruthy();
  }));
});
