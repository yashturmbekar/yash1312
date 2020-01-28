import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  companies: any;
  constructor(
    public router: Router,
    private service: DataService,
    public route: ActivatedRoute
  ) { }
  ngOnInit() {
    const observableResult = this.service.CompanyDetails();
    observableResult.subscribe(( res: Base ) => {
      this.companies = res.data;
    });
  }

}
