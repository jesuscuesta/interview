import { TestBed, inject } from '@angular/core/testing';

import { RagnarokService } from './ragnarok.service';

describe('RagnarokService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RagnarokService]
    });
  });

  it('should be created', inject([RagnarokService], (service: RagnarokService) => {
    expect(service).toBeTruthy();
  }));
});
