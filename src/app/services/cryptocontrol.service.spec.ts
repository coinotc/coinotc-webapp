import { TestBed, inject } from '@angular/core/testing';

import { CryptocontrolService } from './cryptocontrol.service';

describe('CryptocontrolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptocontrolService]
    });
  });

  it('should be created', inject([CryptocontrolService], (service: CryptocontrolService) => {
    expect(service).toBeTruthy();
  }));
});
