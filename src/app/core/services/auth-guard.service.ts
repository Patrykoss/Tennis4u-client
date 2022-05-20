import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  isLoggedIn(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken)
        return false;
    return true;
  }

  getUserName(): string | null {
    let userName = localStorage.getItem('userName');
    return userName;
  }

  getUserId(): number | null {
    let idUser = localStorage.getItem('idUser');
    return Number(idUser);
  }

  getUserAvatar(): string | null {
    let avatar = localStorage.getItem('avatar');
    return avatar;
  }
}
