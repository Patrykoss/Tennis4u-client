import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationInfo } from './../models/reservation-info';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ClientService } from '../../profile/client.service';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { Location } from '@angular/common';

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
  public idMatch: string | null;
  players: any[] = [];
  matchName: string | undefined;
  public playersForm: FormGroup;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _reservationService: ReservationService,
    private readonly _toastr: ToastrService,
    public  authGuard: AuthGuardService,
    private readonly _location: Location
  ) { 
    this._route.data.subscribe((data:any) => { 
      this.clients = data.clients,
      this.reservation = data.reservationInfo,
      this.players = data.players.players
      this.matchName = data.players.tournamentStageName
    });
    this.resForm = new FormGroup({
			resTime: new FormControl('', [Validators.required]),
      clientsForm: new FormControl( this.authGuard.getUserId(), )
		});

    this.playersForm = new FormGroup({
      playersOne: new FormControl('', [Validators.required]),
      playersTwo: new FormControl('', [Validators.required])
    })

    this.idMatch = this._route.snapshot.queryParamMap.get('match');
  }

  ngOnInit(): void {
  }

  show() : void {
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

  getPlayerMatch(): string{
    return this.clients.find(e => e.idClient ==[this.playersForm!.controls['playersOne']!.value!])?.name + " - " + this.clients.find(e => e.idClient ==[this.playersForm!.controls['playersTwo']!.value!])?.name;
  }

  getStartHour(): string {
    let d = this.reservation?.resDate.split(' ');
    const splt = d![1].split(':');
    if(splt[0].length == 1){
      d![1] = `0${d![1]}`;
    }
    return d![1]+":00";
  }

  goBack(): void {
    this._location.back();
  }

  calculatePrice(): number {
    const amount = Number(this.resForm!.controls['resTime']!.value!) + 1;
    return this.reservation!.price * amount
  }

  isDiffPlayers(): boolean {
    if(!this.idMatch)
      return true;
    if(!this.playersForm!.controls['playersOne'] && !this.playersForm!.controls['playerTwo'])
      return false;
    return this.playersForm!.controls['playersOne']!.value! != this.playersForm!.controls['playersTwo']!.value!;
  }

  formIsValid(): boolean {
    if(this.idMatch)
      return !this.resForm.valid || !this.playersForm.valid || !this.isDiffPlayers()
    return !this.resForm.valid
  }

  makeReservation(): void {
    const splDate = this.getDate().split('.');
    if(this.idMatch){
      const reservationMatch = {
        idMatch: this.idMatch,
        idPlayerOne: this.playersForm!.controls['playersOne']!.value!,
        idPlayerTwo: this.playersForm!.controls['playersTwo']!.value!,
        idTennisCourt: this.reservation?.idTennisCourt,
        reservationDate: `${splDate[2]}-${splDate[1]}-${splDate[0]}`,
        startReservation: this.getStartHour(),
        amountOfReservation: Number(this.resForm!.controls['resTime']!.value!) + 1
      };
      this._reservationService.addReservationWithMatchForTournament(reservationMatch).subscribe((res)=>{ 
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
        this._router.navigate(['/tournaments/2/matches']);
      });
    }else{
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
        this._router.navigate([`/tennisClubs/${this.reservation?.idTennisClub}/reservations`]);
      });
    }
  }

}
