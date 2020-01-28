import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

import {ToastrService} from 'ngx-toastr';
import {Base} from '../models/Base';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  showMessage: boolean;
  validatingForm: FormGroup;
  user: any;
  userdetails =
    {
      email: '',
      password: ''
    };

  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute,
              private authService: AuthService,
              private toastr: ToastrService,
              private navbarService: NavbarService) {
    this.showMessage = false;

  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  get email() {
    return this.validatingForm.get('email');
  }

  get password() {
    return this.validatingForm.get('password');
  }

  ngOnInit() {


    this.validatingForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      // required: new FormControl(null, Validators.required)
    });
  }

  signin() {

    const observableResult = this.service.SelectByUser(this.userdetails);

    observableResult.subscribe((res: Base) => {




      if (res.statusCode === 200) {
        this.showMessage = false;
        this.user = res.data;
        this.authService.checkUser(this.user);
        this.navbarService.changeLoginState(true);
        if ( this.user.roleId === 2 ) {
        this.router.navigate(['/stdinfo']);
        }
        if ( this.user.roleId === 1 ) {
        this.router.navigate(['/admhome']);
        }

      } else {
        this.showMessage = true;
        this.message = res.message;
      }

    });

  }


}
