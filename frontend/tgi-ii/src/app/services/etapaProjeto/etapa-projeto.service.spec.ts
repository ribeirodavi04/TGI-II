import { TestBed } from '@angular/core/testing';

import { EtapaProjetoService } from './etapa-projeto.service';

describe('EtapaProjetoService', () => {
  let service: EtapaProjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtapaProjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
