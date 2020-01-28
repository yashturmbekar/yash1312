import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  user: any;
  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute) { }

  ngOnInit() {

    console.log(localStorage.getItem('user1'));
    this.user = JSON.parse(localStorage.getItem('user1'));
  }

}
