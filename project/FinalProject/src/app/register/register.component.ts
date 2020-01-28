import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Base} from '../models/Base';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  validatingForm: FormGroup;
  message: string;
  showMessage: boolean;
  registerDetails =
    {
      email: '',
      password: '',
      cpassword: '',
      fName: '',
      lName: '',
      mName: '',
      address: '',
      state: '',
      city: '',
      pincode: '',
      birthDate: '',
      phone: '',
      roleId: 2,
      enrollment: '',
      trackId: '',
      gender: ''
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

  get LoginFormFName() {
    return this.validatingForm.get('LoginFormFName');
  }

  get LoginFormLName() {
    return this.validatingForm.get('LoginFormLName');
  }

  get LoginFormMName() {
    return this.validatingForm.get('LoginFormMName');
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

  get LoginFormBirthdate() {
    return this.validatingForm.get('LoginFormBirthdate');
  }

  get LoginFormContactNo() {
    return this.validatingForm.get('LoginFormContactNo');
  }

  get LoginFormEnrollment() {
    return this.validatingForm.get('LoginFormEnrollment');
  }

  ngOnInit() {

    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });

  }

  selectChangeHandler(event: any) {
    const course = event.target.value;
  }



  Insert() {


    console.log(this.registerDetails);
    if ( this.registerDetails.password === this.registerDetails.cpassword) {
      const observableResult = this.service.Register(this.registerDetails);

      observableResult.subscribe((res: Base) => {

        if (res.statusCode === 200) {
          this.showMessage = false;
          this.router.navigate(['/login']);
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
