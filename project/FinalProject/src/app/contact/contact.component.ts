import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  map: any;
  constructor() {
    this.map = {
      lat: 51.678418,
      lng: 7.809007,
    };
  }

  ngOnInit() {


  }



}
