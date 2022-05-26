import { TennisClubService } from 'src/app/features/tennis-club/tennis-club.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DatePipe, Location } from '@angular/common';
import { WorkDay } from '../models/workDay';
import { WorkHour } from '../models/workHour';
import { ClubHours } from '../models/clubHours';

@Injectable({
  providedIn: 'root'
})
export class WorkHourResolver implements Resolve<ClubHours> {
  constructor(
    private readonly _tennisClubsService: TennisClubService,
    private readonly _location: Location,
    public datePipe: DatePipe,
    ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ClubHours> {
    const idTennisClub = route.paramMap.get('idTennisClub');
    if(!idTennisClub || isNaN(Number(idTennisClub)) || idTennisClub.includes('.'))
      this._location.back();
    
    return this._tennisClubsService.getTennisClubHours(Number(idTennisClub), this.datePipe.transform(new Date(),"yyyy-MM-dd")!);
  }
}
