import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
	public registerForm: FormGroup;

	constructor(
		private readonly _authService: AuthService,
		private readonly _toastr: ToastrService,
		private readonly _router: Router
	) {
		this.registerForm = new FormGroup({
			firstName: new FormControl('', [
				Validators.required,
				Validators.pattern('^[a-zA-ZąęćłńóśżźĄĘĆŁŃÓŚŹŻ]{2,30}$'),
			]),
			lastName: new FormControl('', [
				Validators.required,
				Validators.pattern('^[a-zA-ZąęćłńóśżźĄĘĆŁŃÓŚŹŻ]{2,30}$'),
			]),
			email: new FormControl('', [
				Validators.required,
				Validators.pattern(
					/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
				),
				Validators.maxLength(50),
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.pattern(
					/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
				),
			]),
			phoneNumber: new FormControl('', [
				Validators.required,
				Validators.pattern('^[0-9]{9}$'),
			]),
			avatar: new FormControl('', []),
			dateOfBirth: new FormControl('', []),
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		if (this.registerForm.valid) {
			this._authService
				.registerAccount(this.registerForm.value)
				.subscribe((res) => {
					if (res.status === 204) {
						this._router.navigate(['login']);
						this._toastr.success('', 'Sukces', {
							timeOut: 3000,
							positionClass: 'toast-bottom-right',
						});
					}
				});
		}
	}
}
