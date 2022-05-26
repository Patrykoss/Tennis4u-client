import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  user: any | undefined;
  constructor(
    private readonly _clientService: ClientService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    public datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    const idUser = this._route.snapshot.paramMap.get('idUser');
    if(!idUser || isNaN(Number(idUser)) || idUser.includes('.'))
      this._router.navigate(['/']);
    this._clientService.getClientDetails(Number(idUser)).subscribe(res => this.user = res);
  }

}
