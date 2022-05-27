import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matchesUrl = 'https://localhost:7000/api/Matches';

  constructor(
    private readonly _http: HttpClient
    ) { }

  getMatchInfo(idMatch: number): Observable<any>{
    return this._http.get<any>(`${this.matchesUrl}/${idMatch}`);
  }

  updateResult(data: any): Observable<any>{
    return this._http.put<any>(`${this.matchesUrl}`,data,{ observe: 'response'});
  }
}