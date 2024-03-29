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

  getTournametDetails(idTournament : number): Observable<any> {
    return this._http.get<any>(`${this.tournamentsUrl}/${idTournament}`);
  }

  getTournametDetailsNav(idTournament : number): Observable<any> {
    return this._http.get<any>(`${this.tournamentsUrl}/${idTournament}/nav`);
  }

  getTournametMatches(idTournament : number): Observable<any> {
    return this._http.get<any>(`${this.tournamentsUrl}/${idTournament}/matches`);
  }
  getTournametPlayers(idTournament : number): Observable<any> {
    return this._http.get<any>(`${this.tournamentsUrl}/${idTournament}/players`);
  }
  registerForTournament(idTournament : number): Observable<any> {
    return this._http.post<any>(`${this.tournamentsUrl}/${idTournament}/registration`,null,{observe: 'response'});
  }

  getPlayersForTournament(idMatch: number): Observable<any>{
    return this._http.get<any>(`${this.tournamentsUrl}/${idMatch}/matchPlayers`);
  }

  createTournament(data: any): Observable<any>{
    return this._http.post<any>(`${this.tournamentsUrl}`,data, {observe: 'response'});
  }
  updateTournament(data: any): Observable<any>{
    return this._http.put<any>(`${this.tournamentsUrl}`,data, {observe: 'response'});
  }



}
