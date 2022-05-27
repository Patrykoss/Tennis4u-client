import { TestBed } from '@angular/core/testing';

import { PlayersResolver } from './players.resolver';

describe('PlayersResolver', () => {
  let resolver: PlayersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlayersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
