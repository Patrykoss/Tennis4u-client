import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuardService implements CanActivate {

  constructor(
    private readonly _toastr: ToastrService,
    private readonly _router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const expectedRole = route.data['expectedRole'];
        if(expectedRole === undefined){
            return true;
        }
        const role = localStorage.getItem('role');
        const token = localStorage.getItem('accessToken');
        if(!role || !token){
          localStorage.removeItem('accessToken');
          localStorage.removeItem('avatar');
          localStorage.removeItem('idClub');
          localStorage.removeItem('idUser');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('role');
          localStorage.removeItem('userName');
            this._toastr.error('', 'Nieupoważniony dostęp', {
                timeOut: 3000,
                positionClass: 'toast-bottom-right' });
            this._router.navigate(['login']);
            return false;
        }
        
        let hasAccess = false;
        for(let r of expectedRole){
            if(role.includes(r))
                hasAccess = true;
        }
        if(!hasAccess){
          this._router.navigate(['']);
            this._toastr.error('', 'Brak wystarczających uprawnień', {
                timeOut: 3000,
                positionClass: 'toast-bottom-right' });
            return false;
        }
        return true
  }
}
