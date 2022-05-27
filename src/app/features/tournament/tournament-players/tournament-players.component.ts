import { TournamentService } from './../tournament.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tournament-players',
  templateUrl: './tournament-players.component.html',
  styleUrls: ['./tournament-players.component.scss']
})
export class TournamentPlayersComponent implements OnInit {
  players: any[] | undefined;
  constructor(
    private readonly _tournametService: TournamentService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const idTournament = this._route.snapshot.paramMap.get('idTournament');
    if(!idTournament || isNaN(Number(idTournament)) || idTournament.includes('.'))
      this._router.navigate(['/']);
    this._tournametService.getTournametPlayers(Number(idTournament)).subscribe((res) => this.players = res)
  }

}
