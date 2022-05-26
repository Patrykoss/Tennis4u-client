import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisClubNavigatorComponent } from './tennis-club-navigator.component';

describe('TennisClubNavigatorComponent', () => {
  let component: TennisClubNavigatorComponent;
  let fixture: ComponentFixture<TennisClubNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisClubNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisClubNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
