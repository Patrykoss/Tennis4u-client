import { Component, OnInit } from '@angular/core';
import { TennisClub } from '../models/tennisClub';
import { TennisClubService } from '../tennis-club.service';

@Component({
  selector: 'app-tennis-clubs',
  templateUrl: './tennis-clubs.component.html',
  styleUrls: ['./tennis-clubs.component.scss']
})
export class TennisClubsComponent implements OnInit {
  tennisClubs: TennisClub[] | undefined

  constructor(
    private readonly _tennisClubsService: TennisClubService
  ) { }

  ngOnInit(): void {
    this._tennisClubsService.getTennisClubs().subscribe(
      result => this.tennisClubs = result
    )
  }

}
