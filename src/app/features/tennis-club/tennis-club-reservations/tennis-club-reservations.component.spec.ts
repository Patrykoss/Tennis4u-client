import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisClubReservationsComponent } from './tennis-club-reservations.component';

describe('TennisClubReservationsComponent', () => {
  let component: TennisClubReservationsComponent;
  let fixture: ComponentFixture<TennisClubReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisClubReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisClubReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
