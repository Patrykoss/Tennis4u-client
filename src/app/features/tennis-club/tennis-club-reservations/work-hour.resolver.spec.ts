import { TestBed } from '@angular/core/testing';

import { WorkHourResolver } from './work-hour.resolver';

describe('WorkHourResolver', () => {
  let resolver: WorkHourResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WorkHourResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
