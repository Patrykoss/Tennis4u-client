import { TestBed } from '@angular/core/testing';

import { TennisClubService } from './tennis-club.service';

describe('TennisClubService', () => {
  let service: TennisClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TennisClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
