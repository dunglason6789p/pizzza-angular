import { TestBed } from '@angular/core/testing';

import { UniqueGeneratorService } from './unique-generator.service';

describe('UniqueGeneratorService', () => {
  let service: UniqueGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
