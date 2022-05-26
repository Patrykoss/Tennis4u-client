import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly _tennisClubsUrl = 'https://localhost:7000/api/Clients';
  constructor(
    private readonly _http: HttpClient
    ) { }

    getClientsForReservation(): Observable<any[]> {
      return this._http.get<any[]>(this._tennisClubsUrl);
    }

    getClientNavDetails(idClient: number): Observable<any> {
      return this._http.get<any>(`${this._tennisClubsUrl}/${idClient}/nav`);
    }

    getClientDetails(idClient: number): Observable<any> {
      return this._http.get<any>(`${this._tennisClubsUrl}/${idClient}`);
    }

    getClientMatches(idClient: number): Observable<any[]> {
      return this._http.get<any[]>(`${this._tennisClubsUrl}/${idClient}/matches`);
    }

    getClientReservations(idClient: number): Observable<any[]> {
      return this._http.get<any[]>(`${this._tennisClubsUrl}/${idClient}/reservations`);
    }

}
