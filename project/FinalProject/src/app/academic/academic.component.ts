import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {Base} from '../models/Base';
import {User} from '../models/User';


@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {
  message: string;
  showMessage: boolean;
  preUser: any;
  academicMarks =
    {
      _10School: '',
      _10Board: '',
      _10PassYear: '',
      _10ObtnMarks: '',
      _10TotalMarks: '',
      _12School: '',
      _12Board: '',
      _12PassYear: '',
      _12ObtnMarks: '',
      _12TotalMarks: '',
      _10Percentage: '',
      _12Percentage: '',
      userDetailId: ''
    };

  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {

    console.log(localStorage.getItem('user1'));
    this.preUser = JSON.parse(localStorage.getItem('user1'));
    console.log(this.preUser);
    this.academicMarks.userDetailId = this.preUser.id;
    console.log(this.academicMarks.userDetailId);
    const observableResult1 = this.service.checkacdmDetails(this.academicMarks);
    observableResult1.subscribe((res1: Base) => {
      // this.academicMarks._10School = res1.data._10School;
      // this.academicMarks._10Board = res1.data._10Board;
      // this.academicMarks._10PassYear = res1.data._10PassYear;
    });
  }

  Insert() {

    const observableResult = this.service.acdmDetails(this.academicMarks);

    console.log(this.academicMarks);
    observableResult.subscribe((res: Base) => {

      if ( res.statusCode === 200 ) {
        this.showMessage = false;
        console.log(res.data);
        this.router.navigate(['/gradu']);

      } else {
        this.showMessage = true;
        this.message = res.message;
        alert(res.message);
        console.log(res.message);
      }
    });
  }
}
