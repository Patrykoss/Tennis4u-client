import { TestBed } from '@angular/core/testing';

import { MatchInfoResolver } from './match-info.resolver';

describe('MatchInfoResolver', () => {
  let resolver: MatchInfoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MatchInfoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
