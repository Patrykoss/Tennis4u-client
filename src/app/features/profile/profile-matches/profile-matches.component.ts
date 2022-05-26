import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-profile-matches',
  templateUrl: './profile-matches.component.html',
  styleUrls: ['./profile-matches.component.scss']
})
export class ProfileMatchesComponent implements OnInit {
  matches: any[] | undefined;
  constructor(
    private readonly _clientService: ClientService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const idUser = this._route.snapshot.paramMap.get('idUser');
    if(!idUser || isNaN(Number(idUser)) || idUser.includes('.'))
      this._router.navigate(['/']);
    this._clientService.getClientMatches(Number(idUser)).subscribe((res) => this.matches = res)
  }

}
