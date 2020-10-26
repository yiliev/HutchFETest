import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlatformUser } from '../interfaces/models/PlatformUser';
import { of } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserSubject: BehaviorSubject<PlatformUser>;

  public currentUser: Observable<PlatformUser>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<PlatformUser>({username: '', password: ''});
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get user(): PlatformUser {
    if (this.isTokenLive()) {
      return this.currentUserSubject.value;
    } else {
      this.logout();
      return null;
    }
  }

  isTokenLive(): boolean {
    let tokenData = this.jwtDecode();

    let mockExpOffset = 10000;
    // let mockExpOffset = 0;

    return (tokenData.exp + mockExpOffset) > (new Date()).getTime();
  }

  jwtDecode() {
    return {
      exp: new Date().getTime()
    }
  }

  login(username: string, password: string) {
    this.currentUserSubject.next({
      username,
      password,
      token: ('' + Math.random()).slice(2)
    });

    return of(null)
      .pipe(materialize())
      .pipe(delay(1000))
      .pipe(dematerialize());
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}
