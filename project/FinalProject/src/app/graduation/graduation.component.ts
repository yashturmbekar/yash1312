import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.scss']
})
export class GraduationComponent implements OnInit {

  message: string;
  showMessage: boolean;
  preUser: any;
  gradMarks =
    {
        degree: '',
        streams: '',
        acdm_clg: '',
        acdm_uni: '',
        acdm_grade: '',
        acdm_bklog: '',
        acdm_atmpt: '',
        acdm_adm_year: '',
        acdm_pass_year: '',
        acdm_percent: '',
        sem1_obtnmarks: '',
        sem2_obtnmarks:  '',
        sem3_obtnmarks:  '',
        sem4_obtnmarks:  '',
        sem5_obtnmarks:  '',
        sem6_obtnmarks:  '',
        sem7_obtnmarks:  '',
        sem8_obtnmarks:  '',
        sem1_totalmarks: '',
        sem2_totalmarks: '',
        sem3_totalmarks: '',
        sem4_totalmarks: '',
        sem5_totalmarks: '',
        sem6_totalmarks: '',
        sem7_totalmarks: '',
        sem8_totalmarks: '',
        userDetailId: ''
    };
  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  Insert() {
    console.log(localStorage.getItem('user1'));
    this.preUser = JSON.parse(localStorage.getItem('user1'));
    console.log(this.preUser);
    this.gradMarks.userDetailId = this.preUser.id;

    const observableResult = this.service.gradDetails(this.gradMarks);

    console.log(this.gradMarks);
    observableResult.subscribe((res: Base) => {

      if ( res.statusCode === 200 ) {
        this.showMessage = false;
        console.log(res.data);
        this.router.navigate(['/cdac']);

      } else {
        this.showMessage = true;
        this.message = res.message;
        console.log(res.message);
      }
    });
  }
}
