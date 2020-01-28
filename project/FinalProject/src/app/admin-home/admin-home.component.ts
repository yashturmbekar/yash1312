import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  tracks: any;
  constructor(
    public router: Router,
    private service: DataService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {

    const observableResult = this.service.TrackDetails();

    observableResult.subscribe((res: Base) => {

      this.tracks = res.data;
    });
  }

}
