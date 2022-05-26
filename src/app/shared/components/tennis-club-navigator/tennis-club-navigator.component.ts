import { TennisClub } from './../../../features/tennis-club/models/tennisClub';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TennisClubService } from 'src/app/features/tennis-club/tennis-club.service';

@Component({
  selector: 'app-tennis-club-navigator',
  templateUrl: './tennis-club-navigator.component.html',
  styleUrls: ['./tennis-club-navigator.component.scss']
})
export class TennisClubNavigatorComponent implements OnInit {
  tennisClub: TennisClub | undefined;
  idTennisClub: number | undefined;
  constructor(
    private readonly _tennisClubsService: TennisClubService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) { 
    const idTennisClub = this._route.snapshot.paramMap.get('idTennisClub');
    if(!idTennisClub || isNaN(Number(idTennisClub)) || idTennisClub.includes('.'))
      this._router.navigate(['/']);
    else
      this.idTennisClub = parseInt(idTennisClub);
    this._tennisClubsService.getTennisClub(this.idTennisClub!).subscribe(res => this.tennisClub = res);
  }

  ngOnInit(): void {
  }

}
