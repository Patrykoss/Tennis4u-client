import { TestBed } from '@angular/core/testing';

import { ReservationInfoResolver } from './reservation-info.resolver';

describe('ReservationInfoResolver', () => {
  let resolver: ReservationInfoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReservationInfoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
