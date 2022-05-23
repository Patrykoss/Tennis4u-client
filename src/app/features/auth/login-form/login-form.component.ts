import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: [
		'./login-form.component.scss',
		'./../register-form/register-form.component.scss',
	],
})
export class LoginFormComponent implements OnInit {
	public loginForm: FormGroup;
	constructor(
		private readonly _authService: AuthService,
		private readonly _toastr: ToastrService,
		private readonly _router: Router
	) {
		this.loginForm = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.pattern(
					/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
				),
			]),
			password: new FormControl('', [Validators.required]),
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		if (this.loginForm.valid) {
			this._authService.login(this.loginForm.value).subscribe((res) => {
				if (res.status === 200) {
					localStorage.setItem('accessToken', res.body.accessToken);
					localStorage.setItem('refreshToken', res.body.refreshToken);
					localStorage.setItem('userName', res.body.name);
					const avatar =
						res.body.avatar ?? './../../../../assets/images/avatar.png';
					localStorage.setItem('avatar', avatar);

					const helper = new JwtHelperService();
					const decodedToken = helper.decodeToken(res.body.accessToken);
					localStorage.setItem(
						'idUser',
						decodedToken[
							'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
						]
					);
					localStorage.setItem(
						'role',
						decodedToken[
							'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
						]
					);
					if (
						decodedToken[
							'http://schemas.microsoft.com/ws/2008/06/identity/claims/groupsid'
						] !== null
					)
						localStorage.setItem(
							'idClub',
							decodedToken[
								'http://schemas.microsoft.com/ws/2008/06/identity/claims/groupsid'
							]
						);
					this._router.navigate(['']);
					this._toastr.success('', 'Zalogowano', {
						timeOut: 3000,
						positionClass: 'toast-bottom-right',
					});
				}
			});
		}
	}
}
