import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      console.log('canActivate1');
      return true;
    } else {
      console.log('canActivate0');
      this.router.navigate(['/login']);
      return false;
    }

  }

  isLoggedIn() {
    if (window.sessionStorage.getItem('active') != null
      &&
      window.sessionStorage.getItem('active') === '1') {
      return true;
    } else {
      return false;
    }

  }

  checkUser(user) {

    const u1 = JSON.stringify(user);
    localStorage.setItem('user1', u1);
    window.sessionStorage.setItem('user', u1);
    window.sessionStorage.setItem('active', '1');
    console.log(localStorage.getItem('user1'));
    return true;

  }

  // checkUser(userDetails, user)
  // {
  //   console.log(userDetails);
  //   console.log(user);
  //   if(userDetails.uname == user.uname
  //     &&
  //     userDetails.password == user.password)
  //     {
  //       window.sessionStorage.setItem("active", "1");
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }

  // }
  signout() {
    window.sessionStorage.setItem('active', '0');
    window.sessionStorage.removeItem('user');
    localStorage.removeItem('user1');
  }

}
