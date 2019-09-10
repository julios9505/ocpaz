import { TestBed } from '@angular/core/testing';

import { IntendenciaService } from './intendencia.service';

describe('IntendenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntendenciaService = TestBed.get(IntendenciaService);
    expect(service).toBeTruthy();
  });
});
