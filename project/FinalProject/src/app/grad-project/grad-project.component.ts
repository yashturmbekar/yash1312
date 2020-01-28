import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-grad-project',
  templateUrl: './grad-project.component.html',
  styleUrls: ['./grad-project.component.scss']
})
export class GradProjectComponent implements OnInit {

  message: string;
  showMessage: boolean;
  preUser: any;
  gradProject =
    {
      projectTitle: '',
      duration: '',
      platform: '',
      projectDesc: '',
      userDetailId: ''
    };

  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
  }


  Insert() {

    this.preUser = JSON.parse(localStorage.getItem('user1'));
    console.log(this.preUser);
    this.gradProject.userDetailId = this.preUser.id;

    const observableResult = this.service.gradProj(this.gradProject);

    console.log(this.gradProject);
    observableResult.subscribe((res: Base) => {

      if ( res.statusCode === 200 ) {
        this.showMessage = false;
        console.log(res.data);
        console.log(res.message);
        this.router.navigate(['/cdacproject']);

      } else {
        this.showMessage = true;
        this.message = res.message;
        console.log(res.message);
      }
    });


  }


}
