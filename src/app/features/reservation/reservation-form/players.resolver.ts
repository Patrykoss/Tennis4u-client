import { TournamentService } from './../../tournament/tournament.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ReservationService } from '../reservation.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlayersResolver implements Resolve<any> {
  constructor(
    private readonly _location: Location,
    private readonly _tournamentService: TournamentService,
    private readonly _route: ActivatedRoute
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const idMatch = this._route.snapshot.queryParamMap.get('match');
    if(!idMatch || isNaN(Number(idMatch)) || idMatch.includes('.'))
      return of([]);

    return this._tournamentService.getPlayersForTournament(Number(idMatch));
  }
}
