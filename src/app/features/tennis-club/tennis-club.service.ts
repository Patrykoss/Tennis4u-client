import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TennisCourt, TennisCourtAdapter } from '../tennis-court/models/tennis-court';
import { ClubHours } from './models/clubHours';
import { TennisClub, TennisClubAdapter } from './models/tennisClub';
import { WorkDay, WorkDayAdapter } from './models/workDay';
import { WorkHour, WorkHourAdapter } from './models/workHour';

@Injectable({
  providedIn: 'root'
})
export class TennisClubService {
  private readonly _tennisClubsUrl = 'https://localhost:7000/api/TennisClubs';

  constructor(
    private readonly _http: HttpClient,
    private readonly _tennisClubAdapter: TennisClubAdapter,
    private readonly _workDayAdapter: WorkDayAdapter,
    private readonly _workHourAdapter: WorkHourAdapter,
    private readonly _tennisCourtAdapter: TennisCourtAdapter
    ) { }

  getTennisClubs(): Observable<TennisClub[]> {
    return this._http.get<TennisClub[]>(this._tennisClubsUrl).pipe(
      map((res: TennisClub[]) => res.map(obj => this._tennisClubAdapter.adapt(obj))
    ));
  }

  getTennisClub(idTennisClub: number): Observable<TennisClub> {
    return this._http.get<TennisClub>(`${this._tennisClubsUrl}/${idTennisClub}`).pipe(
      map((res: TennisClub) => {
        res.workDays = res.workDays.map(w => this._workDayAdapter.adapt(w));
        return this._tennisClubAdapter.adapt(res)
      })
    );
  }

  getTennisClubHours(idTennisClub: number, dateOfReservation: string): Observable<ClubHours> {
    return this._http.get<ClubHours>(`${this._tennisClubsUrl}/${idTennisClub}/workingHours/${dateOfReservation}`).pipe(
      map((res) => {
        res.courts = res.courts.map((c: TennisCourt) => this._tennisCourtAdapter.adapt(c));
        res.workHours = res.workHours.map((d: WorkHour) =>this._workHourAdapter.adapt(d))
        return res;
        }
      )
    )
  }

}
