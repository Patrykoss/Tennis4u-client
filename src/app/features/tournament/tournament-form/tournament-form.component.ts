import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TournamentService } from './../tournament.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {

  public tournamentForm: FormGroup;

  constructor(
    private readonly _tournamentService: TournamentService,
    private readonly _router: Router,
    private readonly _toastr: ToastrService,
    private readonly _authGuard: AuthGuardService
  ) {
    this.tournamentForm = new FormGroup({
			name: new FormControl('', [
				Validators.required
			]),
			rank: new FormControl(4, [
				Validators.required,
        Validators.max(4),
        Validators.min(1)
			]),
			startDate: new FormControl('', [
				Validators.required
			]),
			endDate: new FormControl(null, [
			]),
			finalDateForRegistration: new FormControl('', [
				Validators.required,
			]),
			maxPlayers: new FormControl('', [
				Validators.required,
        Validators.min(8)
			]),
		});
   }

  ngOnInit(): void { }

  onSubmit(): void{
    const tournament = {
      name: this.tournamentForm.get('name')?.value,
      rank: this.tournamentForm.get('rank')?.value,
      startDate: this.tournamentForm.get('startDate')?.value,
      endDate: this.tournamentForm.get('endDate')?.value,
      maxPlayers: this.tournamentForm.get('maxPlayers')?.value,
      finalDateForRegistration: this.tournamentForm.get('finalDateForRegistration')?.value,
    }
    console.log(this.tournamentForm.value)
    if (this.tournamentForm.valid) {
			this._tournamentService.createTournament(tournament).subscribe((res) => {
					if (res.status === 204) {
						this._router.navigate(['/tournaments']);
						this._toastr.success('', 'Sukces', {
							timeOut: 3000,
							positionClass: 'toast-bottom-right',
						});
					}
				});
		}
  }
  minDate():Date{
    return new Date();
  }

}
