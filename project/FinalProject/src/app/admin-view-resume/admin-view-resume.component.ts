import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-admin-view-resume',
  templateUrl: './admin-view-resume.component.html',
  styleUrls: ['./admin-view-resume.component.scss']
})
export class AdminViewResumeComponent implements OnInit {

  preUser: any;
  user = {
    userDetailId: ''
  };
  cdacMarks: any;
  cdacPassyear: any;
  track: any;

  myDetails: any;
  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute) { }

  ngOnInit() {

    const id = localStorage.getItem('resumeId');
    console.log(localStorage.getItem('resumeId'));
    this.user.userDetailId = id;
    console.log(this.user.userDetailId);
    const observableResult = this.service.GetMyInfo(this.user);
    observableResult.subscribe((res: Base) => {
      this.myDetails = res.data;
      this.cdacPassyear = this.myDetails.cdac_marks[0].cdac_passYear;
      this.cdacMarks = this.myDetails.cdac_marks[0].cdac_degreePercent;
      console.log(this.myDetails);
  });
}

}
