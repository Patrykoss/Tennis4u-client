import { MatchService } from './match.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DatePipe,Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MatchInfoResolver implements Resolve<boolean> {
  constructor(
    private readonly _matchService: MatchService,
    private readonly _location: Location,
    public datePipe: DatePipe,
    ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const idMatch = route.paramMap.get('idMatch');
    if(!idMatch || isNaN(Number(idMatch)) || idMatch.includes('.'))
      this._location.back();
    
    return this._matchService.getMatchInfo(Number(idMatch));
  }
}
