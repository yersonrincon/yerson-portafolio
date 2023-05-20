import { TestBed } from '@angular/core/testing';
import { DescripcionResolver } from './descripcion.resolver';

describe('DescripcionResolver', () => {
  let resolver: DescripcionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DescripcionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
