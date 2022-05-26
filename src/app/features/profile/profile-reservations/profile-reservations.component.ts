import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from '../../reservation/reservation.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-profile-reservations',
  templateUrl: './profile-reservations.component.html',
  styleUrls: ['./profile-reservations.component.scss']
})
export class ProfileReservationsComponent implements OnInit {
  reservations: any[] | undefined;
  constructor(
    private readonly _clientService: ClientService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _reservationService: ReservationService,
    private readonly _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const idUser = this._route.snapshot.paramMap.get('idUser');
    if(!idUser || isNaN(Number(idUser)) || idUser.includes('.'))
      this._router.navigate(['/']);
    this._clientService.getClientReservations(Number(idUser)).subscribe((res) => this.reservations = res);
  }

  cancelReservation(reservation: any):void {
    if(confirm(`Czy napewno chcesz anulować rezerwacje ${reservation.reservationRange}?`)) {
      this.reservations = this.reservations!.filter(t => t !== reservation);
      this._reservationService.cancelReservation(reservation.idReservation).subscribe((res)=>{
        if(res.status === 204){
          this.ngOnInit();
          this._toastr.success('', 'Anulowano rezerwacje', {
            timeOut: 3000,
            positionClass: 'toast-bottom-right' });
        }
        else
          this._toastr.error('', res.body, {
            timeOut: 3000,
            positionClass: 'toast-bottom-right' });
      });  
  }
}

}
