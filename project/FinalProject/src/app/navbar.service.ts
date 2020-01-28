import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private loginState = new BehaviorSubject(false);
  state = this.loginState.asObservable();

  constructor() { }

  changeLoginState(state: boolean) {
    this.loginState.next(state);
  }
}
