import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TennisClub } from '../models/tennisClub';
import { TennisClubService } from '../tennis-club.service';

@Component({
  selector: 'app-tennis-club-info',
  templateUrl: './tennis-club-info.component.html',
  styleUrls: ['./tennis-club-info.component.scss']
})
export class TennisClubInfoComponent implements OnInit {
  tennisClub: TennisClub | undefined;
  constructor(
    private readonly _tennisClubsService: TennisClubService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) { 
    const idTennisClub = this._route.snapshot.paramMap.get('idTennisClub');
    if(!idTennisClub || isNaN(Number(idTennisClub)) || idTennisClub.includes('.'))
      this._router.navigate(['/']);
    this._tennisClubsService.getTennisClub(parseInt(idTennisClub!)).subscribe(res => this.tennisClub = res);
  }

  ngOnInit(): void {
  }

}
