import { ReservationService } from './../../reservation/reservation.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';
import { Reservation } from '../../reservation/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsScheduleResolver implements Resolve<Reservation[]> {
  constructor(
    private readonly _reservationService: ReservationService,
    private readonly _location: Location
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reservation[]> {
    const idTennisClub = route.paramMap.get('idTennisClub');
    if(!idTennisClub || isNaN(Number(idTennisClub)) || idTennisClub.includes('.'))
      this._location.back();
    
    return this._reservationService.getReservationsInSchedule(new Date(), Number(idTennisClub));
  }
}
