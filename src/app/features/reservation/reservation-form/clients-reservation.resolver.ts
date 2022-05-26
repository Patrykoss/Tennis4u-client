import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClientService } from '../../profile/client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsReservationResolver implements Resolve<any[]> {
  constructor(
    private readonly _clientService: ClientService,
    private readonly _authGuard: AuthGuardService,    
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    if(this._authGuard.isWorker())
      return this._clientService.getClientsForReservation();
    return of([]);
  }
}
