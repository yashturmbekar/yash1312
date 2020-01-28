import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-company-student',
  templateUrl: './company-student.component.html',
  styleUrls: ['./company-student.component.scss']
})
export class CompanyStudentComponent implements OnInit {
  dac: any;
  dbda: any;
  dmc: any;
  desd: any;
  constructor(public router: Router,
              private service: DataService,
              public route: ActivatedRoute) { }

  ngOnInit() {
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

}
