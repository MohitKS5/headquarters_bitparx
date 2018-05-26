import { TestBed, inject } from '@angular/core/testing';

import { JsontocsvService } from './jsontocsv.service';

describe('JsontocsvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsontocsvService]
    });
  });

  it('should be created', inject([JsontocsvService], (service: JsontocsvService) => {
    expect(service).toBeTruthy();
  }));
});
