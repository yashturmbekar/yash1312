import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

import {ToastrService} from 'ngx-toastr';
import {Base} from '../models/Base';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {

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

          const observableResult = this.service.SelectByCompnay(this.userdetails);

          observableResult.subscribe((res: Base) => {




            if (res.statusCode === 200) {
              this.showMessage = false;
              this.user = res.data;
              this.authService.checkUser(this.user);
              this.navbarService.changeLoginState(true);
              this.router.navigate(['/cmphome']);

            } else {
              this.showMessage = true;
              this.message = res.message;
            }

          });

        }


}
