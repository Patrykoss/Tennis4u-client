import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private clientsUrl = 'https://localhost:7000/api/Workers';
  constructor(private readonly _http: HttpClient) { }

  registerWorker(data: any): Observable<any> {
		return this._http.post<any>(`${this.clientsUrl}/register`, data, {observe: 'response',})
			.pipe(catchError((error) => {return of(error);}));
	}

}