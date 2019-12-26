import { TestBed } from '@angular/core/testing';

import { NewventeService } from './newvente.service';

describe('NewventeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewventeService = TestBed.get(NewventeService);
    expect(service).toBeTruthy();
  });
});
