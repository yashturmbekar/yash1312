import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Base } from '../models/Base';


@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.scss']
})
export class CompanyRegisterComponent implements OnInit {
  message: string;
  showMessage: boolean;
  validatingForm: FormGroup;
  registerDetails =
  {
    email: '',
    password: '',
    cName: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    phone: '',
    roleId: 3,
    websiteName: '',
    cPassword: '',
  };
  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute) {
this.showMessage = false;
}

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  get loginFormModalCPassword() {
    return this.validatingForm.get('loginFormModalCPassword');
  }

  get LoginFormcName() {
    return this.validatingForm.get('LoginFormcName');
  }

  get LoginFormAddress() {
    return this.validatingForm.get('LoginFormAddress');
  }

  get LoginFormState() {
    return this.validatingForm.get('LoginFormState');
  }

  get LoginFormCity() {
    return this.validatingForm.get('LoginFormCity');
  }

  get LoginFormPincode() {
    return this.validatingForm.get('LoginFormPincode');
  }

  get LoginFormContactNo() {
    return this.validatingForm.get('LoginFormContactNo');
  }

  ngOnInit() {

    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });

  }
  Insert() {



    console.log(this.registerDetails);
    if ( this.registerDetails.password === this.registerDetails.cPassword) {
      const observableResult = this.service.CompanyRegister(this.registerDetails);

      observableResult.subscribe((res: Base) => {

        if (res.statusCode === 200) {
          this.showMessage = false;
          this.router.navigate(['/cmplogin']);
          console.log(res.data);

        } else {
          this.showMessage = true;
          this.message = res.message;
          console.log(res.message);
        }

      });
  } else {

    this.showMessage = true;
    this.message = 'Password Does Not Match';
  }
  }




}
