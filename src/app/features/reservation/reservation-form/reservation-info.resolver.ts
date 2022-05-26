import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DatePipe, Location } from '@angular/common';
import { ReservationService } from '../reservation.service';
import { ReservationInfo } from '../models/reservation-info';

@Injectable({
  providedIn: 'root'
})
export class ReservationInfoResolver implements Resolve<ReservationInfo> {
  constructor(
    private readonly _location: Location,
    private readonly _reservationService: ReservationService
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ReservationInfo> {
    const idTennisCourt = route.paramMap.get('idTennisCourt');
    let date = route.paramMap.get('date');
    const time = route.paramMap.get('time');
    if(!idTennisCourt || isNaN(Number(idTennisCourt)) || idTennisCourt.includes('.') || !date || !time)
      this._location.back();

    return this._reservationService.getInfoForReservation(Number(idTennisCourt),date!,time!);
  }
}
