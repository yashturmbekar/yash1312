import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { NavbarService } from '../navbar.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Base } from '../models/Base';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  message: string;
  showMessage: boolean;
  preUser: any;
  newUser = {
    email: '',
    oldPassword: '',
    newPassword: ''
  };
  IsLoggedIn: boolean;
  validatingForm: FormGroup;

  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute,
              private authService: AuthService,
              private navbarService: NavbarService) {
  }

  ngOnInit() {

    console.log(localStorage.getItem('user1'));
    this.preUser = JSON.parse(localStorage.getItem('user1'));
    console.log(this.preUser);
    this.navbarService.state.subscribe(state => this.IsLoggedIn = state);
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required),
      loginFormModalRepassword: new FormControl('', Validators.required)
    });

  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
  get loginFormModalRepassword() {
    return this.validatingForm.get('loginFormModalRepassword');
  }

  changePassword() {
    if ( this.newUser.email === this.preUser.email ) {

       const obeservableResult = this.service.ChangePassword(this.newUser);
       obeservableResult.subscribe((res: Base ) => {


        if ( res.statusCode === 200 ) {
          this.showMessage = false;
          console.log(res.data);
          this.router.navigate(['/login']);

        } else {
          this.showMessage = true;
          this.message = res.message;
          alert(res.message);
          console.log(res.message);
        }
       });

    }


  }


Signout() {

  this.authService.signout();
  this.navbarService.changeLoginState(false);
  this.router.navigate(['/login']);

  }

}
