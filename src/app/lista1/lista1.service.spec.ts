import { TestBed } from '@angular/core/testing';

import { Lista1Service } from './lista1.service';

describe('Lista1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Lista1Service = TestBed.get(Lista1Service);
    expect(service).toBeTruthy();
  });
});
