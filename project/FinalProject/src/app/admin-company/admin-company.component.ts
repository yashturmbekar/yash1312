import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.scss']
})
export class AdminCompanyComponent implements OnInit {

  companies: any;
  gradMarks = {
    streams: '',
    degree: ''
  };
  constructor(
    public router: Router,
    private service: DataService,
    public route: ActivatedRoute
  ) { }
  ngOnInit() {
    const observableResult = this.service.CompanyDetails();
    observableResult.subscribe(( res: Base ) => {
      this.companies = res.data;
      console.log(this.companies);
    });
  }

}
