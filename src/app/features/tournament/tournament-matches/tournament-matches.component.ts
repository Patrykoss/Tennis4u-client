import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-tournament-matches',
  templateUrl: './tournament-matches.component.html',
  styleUrls: ['./tournament-matches.component.scss']
})
export class TournamentMatchesComponent implements OnInit {
  matches: any[] | undefined;
  constructor(
    private readonly _tournametService: TournamentService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const idTournament = this._route.snapshot.paramMap.get('idTournament');
    if(!idTournament || isNaN(Number(idTournament)) || idTournament.includes('.'))
      this._router.navigate(['/']);
    this._tournametService.getTournametMatches(Number(idTournament)).subscribe((res) => this.matches = res)
  }

}
