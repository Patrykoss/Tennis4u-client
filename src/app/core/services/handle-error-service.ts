import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root',
})
export class HandleErrorService {
	constructor(private _toastrService: ToastrService, private _router: Router) {}

	public handleError(err: HttpErrorResponse) {
		let errorMesage: string;
		if (err.error instanceof ErrorEvent)
			errorMesage = `An error occurred: ${err.error.message}`;
		else {
			switch (err.status) {
			case 400:
				errorMesage = err.error;
				break;
			case 401:
				errorMesage = err.error ?? "Nieupoważniony dostęp"
				// if (err.url == 'http://localhost:4200/api/accounts/login')
				// 		errorMesage = 'invalidCredentials';
				// else {
				// 	if (err.error.expired) errorMesage = 'tokenExpired';
				// 	else errorMesage = 'httpErros.401';
				// }
				break;
			case 403:
				errorMesage = 'Nieupoważniony dostęp';
					break;
			case 404:
				errorMesage = err.error;
					break;
			case 500:
				errorMesage = 'httpErros.500';
					break;
			default:
				errorMesage = 'httpErros.default';
					break;
			}
		}
		this._toastrService.error('', errorMesage, {
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
		});
		if (err.status === 401) {
			localStorage.removeItem('accessToken');
			localStorage.removeItem('role');
			localStorage.removeItem('userName');
			localStorage.removeItem('id');
			this._router.navigate(['login']);
		}
		if (err.status === 403) {
			this._router.navigate(['']);
		}
		if (err.status === 404) {
			this._router.navigate(['']);
		}
	}
}
