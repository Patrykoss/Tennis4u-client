import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisClubTournamentsComponent } from './tennis-club-tournaments.component';

describe('TennisClubTournamentsComponent', () => {
  let component: TennisClubTournamentsComponent;
  let fixture: ComponentFixture<TennisClubTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisClubTournamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisClubTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
