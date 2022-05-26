import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationInfo } from './../models/reservation-info';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ClientService } from '../../profile/client.service';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  reservation: ReservationInfo | undefined;
  isForm: boolean = true;
  finalDate: string | undefined;
  public resForm: FormGroup;
  clients: any[] = [];
  public idUser: number = 0;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _reservationService: ReservationService,
    private readonly _toastr: ToastrService,
    public  authGuard: AuthGuardService
  ) { 
    this._route.data.subscribe((data:any) => { 
      this.clients = data.clients,
      this.reservation = data.reservationInfo
    });
    this.resForm = new FormGroup({
			resTime: new FormControl('', [Validators.required,]),
      clientsForm: new FormControl( this.authGuard.getUserId(), )
		});
  }

  ngOnInit(): void {
    
  }

  show() : void {
    console.log(this.resForm!.controls['clientsForm']!.value!)
    this.isForm = false;
    this.finalDate = this.reservation?.availableHours![this.resForm.controls['resTime'].value];
  }

  showForm(): void{
    this.isForm = true;
  }

  getDate(): string {
    const d = this.reservation?.resDate.split(' ');
    return d![0];
  }

  getName(): string{
    return this.clients.find(e => e.idClient ==[this.resForm!.controls['clientsForm']!.value!])?.name;
  }

  getStartHour(): string {
    let d = this.reservation?.resDate.split(' ');
    const splt = d![1].split(':');
    if(splt[0].length == 1){
      d![1] = `0${d![1]}`;
    }
    return d![1]+":00";
  }

  calculatePrice(): number {
    const amount = Number(this.resForm!.controls['resTime']!.value!) + 1;
    return this.reservation!.price * amount
  }

  makeReservation(): void {
    const splDate = this.getDate().split('.');
    const newReservation = {
      idTennisCourt: this.reservation?.idTennisCourt,
      reservationDate: `${splDate[2]}-${splDate[1]}-${splDate[0]}`,
      startReservation: this.getStartHour(),
      amountOfReservation: Number(this.resForm!.controls['resTime']!.value!) + 1,
      idClient: this.resForm!.controls['clientsForm']!.value!
    };
    this._reservationService.addReservation(newReservation).subscribe((res)=>{
      
      if(res.status == 204){
				this._toastr.success('', 'Zarezerwowano', {
					timeOut: 3000,
					positionClass: 'toast-bottom-right',
					});
      }else{
        this._toastr.error('', res.body, {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
      }
      this._router.navigate(['/tennisClubs/1/reservations']);
    });

  }

}
