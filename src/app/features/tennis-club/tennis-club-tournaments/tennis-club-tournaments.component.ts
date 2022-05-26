import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { DateParserService } from 'src/app/shared/helpers/date-parser.service';
import { TournamentInList } from '../../tournament/models/TournamentInList';
import { TournamentService } from '../../tournament/tournament.service';

@Component({
  selector: 'app-tennis-club-tournaments',
  templateUrl: './tennis-club-tournaments.component.html',
  styleUrls: ['./tennis-club-tournaments.component.scss']
})
export class TennisClubTournamentsComponent implements OnInit {
  tournaments: TournamentInList[] | undefined

  constructor(
    private readonly _tournamentService: TournamentService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    public dateParser: DateParserService,
    public authGuard: AuthGuardService,
    private readonly _toastr: ToastrService

  ) { }

  ngOnInit(): void {
    const idTennisClub = this._route.snapshot.paramMap.get('idTennisClub');
    if(!idTennisClub || isNaN(Number(idTennisClub)) || idTennisClub.includes('.'))
      this._router.navigate(['/']);
    this._tournamentService.getClubTournaments(parseInt(idTennisClub!)).subscribe(
      result => {this.tournaments = result}
    );
  }

  isBeforeNow(tournament: TournamentInList): boolean {
    return new Date(tournament.startDate) > new Date()
  }

  askBeforeDelete(tournament: TournamentInList) {
    if(confirm(`Czy napewno chcesz usunąć turniej ${tournament.tournamentName}?`)) {
      this.tournaments = this.tournaments!.filter(t => t !== tournament);
      this._tournamentService.deleteTournament(tournament.idTournament).subscribe((res)=>{
        if(res.status === 204)
          this._toastr.success('', 'Usunięto turniej', {
            timeOut: 3000,
            positionClass: 'toast-bottom-right' });
        else
          this._toastr.error('', res.body, {
            timeOut: 3000,
            positionClass: 'toast-bottom-right' });
      });     
    }
  }

}
