import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private clientsUrl = 'https://localhost:7000/api/Accounts';

	constructor(private readonly _http: HttpClient) {}

	registerAccount(data: any): Observable<any> {
		// HttpResponse<any>
		const newAccount = {
			firstName: data.firstName,
			lastName: data.lastName,
			phoneNumber: data.phoneNumber,
			email: data.email,
			password: data.password,
			avatar: data.avatar,
			dateOfBirth: '2022-05-22',
		};
		return this._http
			.post<any>(`${this.clientsUrl}/register`, newAccount, {
				observe: 'response',
			})
			.pipe(
				catchError((error) => {
					return of(error);
				})
			);
	}

	login(data: any): Observable<any> {
		return this._http
			.post<any>(`${this.clientsUrl}/login`, data, { observe: 'response' })
			.pipe(
				catchError((error) => {
					return of(error);
				})
			);
	}

	// private handleError<T>(result?: T) {
	//   return (error: any): Observable<T> => {
	//     this._toastrService.error('', error.error, {
	//           timeOut: 3000,
	//           positionClass: 'toast-bottom-right' })
	//     return of(result as T);
	//   };
	// }
}
