import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-student-company',
  templateUrl: './student-company.component.html',
  styleUrls: ['./student-company.component.scss']
})
export class StudentCompanyComponent implements OnInit {

  companies: any;
  constructor(public router: Router,
              private service: DataService,
              public route: ActivatedRoute) {

   }

  ngOnInit() {
    const observableResult = this.service.CompanyDetails();
    observableResult.subscribe(( res: Base ) => {
      this.companies = res.data;
    });
  }

}
