import { TestBed } from '@angular/core/testing';

import { HojacvService } from './hojacv.service';

describe('HojacvService', () => {
  let service: HojacvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HojacvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
