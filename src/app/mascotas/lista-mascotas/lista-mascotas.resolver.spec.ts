import { TestBed } from '@angular/core/testing';

import { ListaMascotasResolver } from './lista-mascotas.resolver';

describe('ListaMascotasResolver', () => {
  let resolver: ListaMascotasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaMascotasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
