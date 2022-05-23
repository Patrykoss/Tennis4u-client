import { Component, OnInit } from '@angular/core';
import { TournamentInList } from '../models/TournamentInList';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {
  tournaments: TournamentInList[] | undefined

  constructor(
    private readonly _tournamentService: TournamentService
  ) { }

  ngOnInit(): void {
    this._tournamentService.getTournaments().subscribe(
      result => {this.tournaments = result}
    );
  }

}
