import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Reservation, ReservationAdapter } from './models/reservation';
import { ReservationInfo, ReservationInfoAdapter } from './models/reservation-info';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly _tennisClubsUrl = 'https://localhost:7000/api/Reservations';

  constructor(
    private readonly _http: HttpClient,
    private readonly _reservationAdapter: ReservationAdapter,
    private readonly _datePipe: DatePipe,
    private readonly _reservationInfoAdapter: ReservationInfoAdapter
    ) { }

    getReservationsInSchedule(date: Date,  idTennisClub: number): Observable<Reservation[]> {
      return this._http.get<Reservation[]>(`${this._tennisClubsUrl}/${this._datePipe.transform(date,"yyyy-MM-dd")!}/tennisClub/${idTennisClub}`).pipe(
        map((res: Reservation[]) => res.map(obj => this._reservationAdapter.adapt(obj))
      ));
    }

    getInfoForReservation(idTennisCourt: number, date: string, time: string): Observable<ReservationInfo> {
      return this._http.get<ReservationInfo>(`${this._tennisClubsUrl}/tennisCourt/${idTennisCourt}/time/${time}?dateOfReservations=${date}`).pipe(
        map((res: ReservationInfo) => this._reservationInfoAdapter.adapt(res)));
    }

    addReservation(data: any):Observable<any> {
      return this._http.post<boolean>(this._tennisClubsUrl, data, {observe: 'response'});
    }

    
}
