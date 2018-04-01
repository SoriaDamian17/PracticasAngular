import { TestBed, inject } from '@angular/core/testing';

import { LoadfileService } from './loadfile.service';

describe('LoadfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadfileService]
    });
  });

  it('should be created', inject([LoadfileService], (service: LoadfileService) => {
    expect(service).toBeTruthy();
  }));
});
