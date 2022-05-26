import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
	constructor(
		public authGuard: AuthGuardService,
		private readonly _router: Router
		) {}

	ngOnInit(): void {}

	logout(): void {
		localStorage.removeItem('accessToken');
        localStorage.removeItem('avatar');
        localStorage.removeItem('idClub');
        localStorage.removeItem('idUser');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
        localStorage.removeItem('userName');
		this._router.navigate(['']);
	}
}
