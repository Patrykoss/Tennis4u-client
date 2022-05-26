import { Component, OnInit } from '@angular/core';
import { DateParserService } from 'src/app/shared/helpers/date-parser.service';
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
    private readonly _tournamentService: TournamentService,
    public dateParser: DateParserService
  ) { }

  ngOnInit(): void {
    this._tournamentService.getTournaments().subscribe(
      result => {this.tournaments = result
      }
    );
    
  }

  // parseDate(date: Date): string {
  //   let splt = date.toString().split('T');
  //   return `${splt[0]} ${splt[1].slice(0, -3)}`;
  // }

}
