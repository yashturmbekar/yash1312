import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.scss']
})
export class AdminStudentComponent implements OnInit {

  dac: any;
  dbda: any;
  dmc: any;
  desd: any;
  validatingForm: FormGroup;
  studentEmail: '';
  company = {
    email: '',
    cName: '',
    iDate: '',
    iPlace: '',
    rDate: '',
    tech: '',
    studentEmailId: '',
    fName: ''
  };
  companyDet: any;
  companyEmail = {
   email: ''
  };

  constructor(
    public router: Router,
    private service: DataService,
    public route: ActivatedRoute
  ) { }
  ngOnInit() {

    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email)
    });

    const observableResult1 = this.service.StudentDac();
    observableResult1.subscribe(( res: Base ) => {
      this.dac = res.data;
      console.log(this.dac);
    });
    const observableResult2 = this.service.StudentDbda();
    observableResult2.subscribe(( res: Base ) => {
      this.dbda = res.data;
    });
    const observableResult3 = this.service.StudentDmc();
    observableResult3.subscribe(( res: Base ) => {
      this.dmc = res.data;
    });
    const observableResult4 = this.service.StudentDesd();
    observableResult4.subscribe(( res: Base ) => {
      this.desd = res.data;
    });
  }

  viewResume(id: any) {
    console.log(id);
    const id1 = JSON.stringify(id);
    localStorage.setItem('resumeId', id);
    console.log(localStorage.getItem('resumeId'));
    this.router.navigate(['/admviewresume']);
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }


  sendEmail(studentEmail, fName) {
    console.log(studentEmail + fName);
    this.company.studentEmailId = studentEmail;
    this.company.fName = fName;
  }

  async sendEmail1() {
    console.log(this.company.email);
    await new Promise((resolve, reject) => {
      const observableResult = this.service.GetCompanyByEmail(this.company);
      observableResult.subscribe((res: Base) => {
        this.companyDet = res.data;
        console.log(this.companyDet);
        this.company.cName = this.companyDet.cName;
        this.company.iDate = this.companyDet.companyDetail.iDate;
        this.company.iPlace = this.companyDet.companyDetail.iPlace;
        this.company.rDate = this.companyDet.companyDetail.rDate;
        this.company.tech = this.companyDet.companyDetail.tech;
      });
      resolve();
    });
    console.log(this.company);
    const observableResult5 = this.service.SendEmail(this.company);
    await new Promise((resolve, reject) => {
      observableResult5.subscribe((res: Base) => {
        const email = res.data;
        resolve();
      });
    });
  }
}
