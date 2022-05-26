import { TestBed } from '@angular/core/testing';

import { ClientsReservationResolver } from './clients-reservation.resolver';

describe('ClientsReservationResolver', () => {
  let resolver: ClientsReservationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ClientsReservationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
