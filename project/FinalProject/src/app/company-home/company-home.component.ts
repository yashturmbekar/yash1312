import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {
  tracks: any;
  constructor(
    public router: Router,
    private service: DataService,
    public route: ActivatedRoute) { }

  ngOnInit() {

    const observableResult = this.service.TrackDetails();

    observableResult.subscribe((res: Base) => {

      this.tracks = res.data;
    });
  }

}
