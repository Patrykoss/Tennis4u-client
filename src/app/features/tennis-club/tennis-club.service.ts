import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TennisClub, TennisClubAdapter } from './models/tennisClub';

@Injectable({
  providedIn: 'root'
})
export class TennisClubService {
  private tennisClubsUrl = 'https://localhost:7000/api/TennisClubs';

  constructor(
    private readonly _http: HttpClient,
    private readonly _tennisClubAdapter: TennisClubAdapter) { }

  getTennisClubs(): Observable<TennisClub[]> {
    return this._http.get<TennisClub[]>(this.tennisClubsUrl).pipe(
      map((res: TennisClub[]) => res.map(d => this._tennisClubAdapter.adapt(d))
    ));
  }

}
