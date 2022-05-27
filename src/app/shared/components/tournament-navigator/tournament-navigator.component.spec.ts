import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentNavigatorComponent } from './tournament-navigator.component';

describe('TournamentNavigatorComponent', () => {
  let component: TournamentNavigatorComponent;
  let fixture: ComponentFixture<TournamentNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
