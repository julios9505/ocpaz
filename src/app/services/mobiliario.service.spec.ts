import { TestBed } from '@angular/core/testing';

import { MobiliarioService } from './mobiliario.service';

describe('MobiliarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobiliarioService = TestBed.get(MobiliarioService);
    expect(service).toBeTruthy();
  });
});
