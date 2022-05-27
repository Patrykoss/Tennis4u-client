import { TournamentService } from './../tournament.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tournament-info',
  templateUrl: './tournament-info.component.html',
  styleUrls: ['./tournament-info.component.scss']
})
export class TournamentInfoComponent implements OnInit {
  tournament: any | undefined;
  idTournament: number | undefined;
  constructor(
    private readonly _tournamentService: TournamentService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    public datePipe: DatePipe,
    public authGuard: AuthGuardService,
    private readonly _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const idTournament = this._route.snapshot.paramMap.get('idTournament');
    if(!idTournament || isNaN(Number(idTournament)) || idTournament.includes('.'))
      this._router.navigate(['/']);
    this.idTournament = Number(idTournament);
    this._tournamentService.getTournametDetails(this.idTournament).subscribe(res => this.tournament = res);
  }

  register(): void{
    this._tournamentService.registerForTournament(this.idTournament!).subscribe((res)=>{
      if(res.status == 204){
        this._toastr.success('', 'Wpisano na turniej', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
        this._router.navigate([`/tournaments/${this.idTournament}/players`]);
      }
    })
  }

}
