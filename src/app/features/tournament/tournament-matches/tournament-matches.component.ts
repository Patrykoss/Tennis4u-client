import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-tournament-matches',
  templateUrl: './tournament-matches.component.html',
  styleUrls: ['./tournament-matches.component.scss']
})
export class TournamentMatchesComponent implements OnInit {
  matches: any[] | undefined;
  idTournament: number | undefined;
  constructor(
    private readonly _tournametService: TournamentService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    public authGuard : AuthGuardService,
    public datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    const idTournament = this._route.snapshot.paramMap.get('idTournament');
    if(!idTournament || isNaN(Number(idTournament)) || idTournament.includes('.'))
      this._router.navigate(['/']);
    this.idTournament = Number(idTournament);
    this._tournametService.getTournametMatches(Number(idTournament)).subscribe((res) => this.matches = res)
  }

}
