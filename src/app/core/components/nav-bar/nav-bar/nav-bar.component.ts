import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
	constructor(public authGuard: AuthGuardService) {}

	ngOnInit(): void {}

	logout(): void {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('userName');
		localStorage.removeItem('avatar');
		localStorage.removeItem('idUser');
	}
}
