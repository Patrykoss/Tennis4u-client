import { TournamentService } from './../../../features/tournament/tournament.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tournament-navigator',
  templateUrl: './tournament-navigator.component.html',
  styleUrls: ['./tournament-navigator.component.scss']
})
export class TournamentNavigatorComponent implements OnInit {
  tournament: any | undefined;
  idTournament: number | undefined;
  constructor(
    private readonly _tournamentService: TournamentService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) { 
    const idTournament = this._route.snapshot.paramMap.get('idTournament');
    if(!idTournament || isNaN(Number(idTournament)) || idTournament.includes('.'))
      this._router.navigate(['/']);
    else
      this.idTournament = parseInt(idTournament);
    this._tournamentService.getTournametDetailsNav(this.idTournament!).subscribe(res => this.tournament = res);
  }

  ngOnInit(): void {
  }

}
