import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { ClientService } from './../../../features/profile/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-navigator',
  templateUrl: './profile-navigator.component.html',
  styleUrls: ['./profile-navigator.component.scss']
})
export class ProfileNavigatorComponent implements OnInit {
  client: any | undefined;
  idClient: number | undefined;

  constructor(
    private readonly _clientService: ClientService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    public authGuard: AuthGuardService
  ) {
    const idClient = this._route.snapshot.paramMap.get('idUser');
    if(!idClient || isNaN(Number(idClient)) || idClient.includes('.'))
      this._router.navigate(['/']);
    else
      this.idClient = parseInt(idClient);
    this._clientService.getClientNavDetails(this.idClient!).subscribe(res => this.client = res);
   }

  ngOnInit(): void {
  }

}
