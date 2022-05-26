import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisClubInfoComponent } from './tennis-club-info.component';

describe('TennisClubInfoComponent', () => {
  let component: TennisClubInfoComponent;
  let fixture: ComponentFixture<TennisClubInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisClubInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisClubInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
