import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.scss']
})
export class WorkerFormComponent implements OnInit {

  public registerForm: FormGroup;

	constructor(
		private readonly _workerService: WorkerService,
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
			])
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		if (this.registerForm.valid) {
			this._workerService
				.registerWorker(this.registerForm.value)
				.subscribe((res) => {
					if (res.status === 204) {
						this._router.navigate(['/workerPanel']);
						this._toastr.success('', 'Sukces', {
							timeOut: 3000,
							positionClass: 'toast-bottom-right',
						});
					}
				});
		}
	}

}
