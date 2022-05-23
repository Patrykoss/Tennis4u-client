import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisClubsComponent } from './tennis-clubs.component';

describe('TennisClubsComponent', () => {
  let component: TennisClubsComponent;
  let fixture: ComponentFixture<TennisClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
