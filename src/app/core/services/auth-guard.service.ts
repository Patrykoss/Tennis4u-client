import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthGuardService {
	constructor() {}

	isLoggedIn(): boolean {
		const AccessToken = localStorage.getItem('accessToken');
		if (!AccessToken) return false;
		return true;
	}

	getUserName(): string | null {
		const userName = localStorage.getItem('userName');
		return userName;
	}

	getUserId(): number | null {
		const idUser = localStorage.getItem('idUser');
		return Number(idUser);
	}

	getUserAvatar(): string | null {
		const avatar = localStorage.getItem('avatar');
		return avatar;
	}

	isWorker(): boolean {
		if (!this.isLoggedIn()) return false;
		const roles = localStorage.getItem('role');
		if (roles === '' || roles === undefined) return false;
		if (
			roles?.toLowerCase().includes('worker') ||
			roles?.toLowerCase().includes('manager')
		)
			return true;
		return false;
	}

	isClient(): boolean {
		if (!this.isLoggedIn()) return false;
		const roles = localStorage.getItem('role');
		if (roles == '' || roles === undefined) return false;
		if (roles?.toLowerCase().includes('client')) return true;
		return false;
	}
}
