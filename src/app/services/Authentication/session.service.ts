import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  getLoggedIn() {
    return this.loggedIn.value;
  }
}
