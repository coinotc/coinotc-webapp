import { TestBed, inject } from '@angular/core/testing';

import { ShowcontrolService } from './showcontrol.service';

describe('ShowcontrolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowcontrolService]
    });
  });

  it('should be created', inject([ShowcontrolService], (service: ShowcontrolService) => {
    expect(service).toBeTruthy();
  }));
});
