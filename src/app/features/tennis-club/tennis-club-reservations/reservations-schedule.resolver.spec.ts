import { TestBed } from '@angular/core/testing';

import { ReservationsScheduleResolver } from './reservations-schedule.resolver';

describe('ReservationsScheduleResolver', () => {
  let resolver: ReservationsScheduleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReservationsScheduleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
