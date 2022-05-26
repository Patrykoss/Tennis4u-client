import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TournamentInList, TournamentInListAdapter } from './models/TournamentInList';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private tournamentsUrl = 'https://localhost:7000/api/Tournaments';
  constructor(
    private readonly _http: HttpClient,
    private readonly _tournamentInListAdapter: TournamentInListAdapter
  ) { }

  getTournaments(): Observable<TournamentInList[]> {
    return this._http.get<TournamentInList[]>(this.tournamentsUrl).pipe(
      map((res: TournamentInList[]) => res.map(obj => this._tournamentInListAdapter.adapt(obj))
    ));
  }

  getClubTournaments(idTennisClub : number): Observable<TournamentInList[]> {
    return this._http.get<TournamentInList[]>(`${this.tournamentsUrl}/tennisClub/${idTennisClub}`).pipe(
      map((res: TournamentInList[]) => res.map(obj => this._tournamentInListAdapter.adapt(obj))
    ));
  }

  deleteTournament(idTournament: number): Observable<any> {
    return this._http.delete<string>(`${this.tournamentsUrl}/${idTournament}`, { observe: 'response'});
  }
}
