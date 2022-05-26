import { Reservation } from './../../reservation/models/reservation';
import { ClubHours } from './../models/clubHours';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe, Time } from '@angular/common';
import { WorkHour } from '../models/workHour';
import { ReservationService } from '../../reservation/reservation.service';

@Component({
  selector: 'app-tennis-club-reservations',
  templateUrl: './tennis-club-reservations.component.html',
  styleUrls: ['./tennis-club-reservations.component.scss']
})
export class TennisClubReservationsComponent implements OnInit {
  public dateForm: FormGroup;
  public clubHours: ClubHours | undefined;
  public reservations: Reservation[] = [];
  
  constructor(
    public datePipe: DatePipe,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private _reservationService: ReservationService
  ) {

    this.dateForm = new FormGroup({
			dateOfReservation: new FormControl(new Date(),[Validators.required])
		});

   }

  ngOnInit(): void {
    this._route.data.subscribe((data:any) => { 
      this.clubHours = data.workingHours
      this.reservations = data.reservations
    });
  }

  getHourDiff(startTime:Time, endTime:Time): number{
    const startHour = Number(startTime.toString().split(':')[0]);
    const endHour = Number(endTime.toString().split(':')[0]);
    return endHour - startHour;
  }

  updateGraphic(value:any){
    const idTennisClub = this._route.snapshot.paramMap.get('idTennisClub');
    if(!idTennisClub || isNaN(Number(idTennisClub)) || idTennisClub.includes('.'))
      this._router.navigate(['/']);
    
    this._reservationService.getReservationsInSchedule(value, Number(idTennisClub)).subscribe((res)=>{
      this.reservations = res
      }
    );
  }

  getCurrentDate(): string{
    const date = this.datePipe.transform(this.dateForm.controls['dateOfReservation'].value,'yyyy-MM-dd');
    return date!.toString();
  }

  isAvailable(idTennisCourt: number, hourOfReservation: string): boolean{
    const row = this.reservations.find(r => Number(r.idTennisCourt) == idTennisCourt)
    if(!row)
      return false;
    if(row?.reservationHours.includes(hourOfReservation))
      return false;
    return true;
  }

  minDate(): Date{
    return new Date();
  }

  isAvailableHour(hour: string): boolean{
    const d1= this.datePipe.transform(new Date(),'yyyy-MM-dd');
    const d2 = this.datePipe.transform(this.dateForm.controls['dateOfReservation'].value,'yyyy-MM-dd')
    if(d1 != d2)
      return true
    const splt = hour.split(":");
    return ( Number(splt[0]!) >= new Date().getHours()+1 )
  }


}
