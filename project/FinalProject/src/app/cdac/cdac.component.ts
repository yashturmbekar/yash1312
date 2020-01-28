import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import { map } from 'rxjs/operators';
import {Base} from '../models/Base';

@Component({
  selector: 'app-cdac',
  templateUrl: './cdac.component.html',
  styleUrls: ['./cdac.component.scss']
})
export class CdacComponent implements OnInit {
  message: string;
  showMessage: boolean;
  subjects: any = [];
  subMarks: any = [];
  marks = {};
  preUser: any;
  CDACMarks =
    {
      cdac_passYear: '',
      cdac_degreePercent: '',
      subject_marks: [],
      userDetailId: ''
    };
  constructor(public router: Router,
              private service: DataService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('user1'));
    this.preUser = JSON.parse(localStorage.getItem('user1'));
    this.CDACMarks.userDetailId = this.preUser.id;
    console.log(this.preUser);
    this.service.GetSubjectsByTrackId(this.preUser.trackId).subscribe((res: Base) => {
      console.log(res);
      this.subjects = res.data;
      this.subjects.map(sub => {
        this.CDACMarks.subject_marks.push({
          id: sub.id,
          name: sub.name,
          marks: null
        });
      });
    });
  }

  Insert() {

    this.subjects.forEach(element => {
    this.subMarks = ((document.getElementById(element.name) as HTMLInputElement).value);
    });


    console.log(this.CDACMarks);
    const observableResult = this.service.cdacDetails(this.CDACMarks);
    observableResult.subscribe((res: Base) => {

      if ( res.statusCode === 200 ) {
        this.showMessage = false;
        console.log(res.data);
        this.router.navigate(['/gradproject']);

      } else {
        this.showMessage = true;
        this.message = res.message;
        console.log(res.message);
      }
    });

  }

}
