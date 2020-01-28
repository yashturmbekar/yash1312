import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import { Base } from '../models/Base';

@Component({
  selector: 'app-cdac-project',
  templateUrl: './cdac-project.component.html',
  styleUrls: ['./cdac-project.component.scss']
})
export class CdacProjectComponent implements OnInit {

  message: string;
  showMessage: boolean;
  preUser: any;
  cdacProject =
    {
      projectTitle: '',
      duration: '',
      platform: '',
      projectDesc: '',
      userDetailId: ''
    };

    webTech: [
    'JAVA EE', 'ASP.NET MVC', 'PHP', 'Angular', 'RESTful API Programming', 'Node'

    ];
  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute) {
  }

  tech = {
    javaee: ''
  };

  ngOnInit() {
  }


  selectChangeHandler(event: any) {
    const techno = event.target.name;
    console.log(techno);
  }

  checkCheckBoxvalue(event) {
    console.log(event.checked);
  }
  Insert() {

    this.preUser = JSON.parse(localStorage.getItem('user1'));
    console.log(this.preUser);
    this.cdacProject.userDetailId = this.preUser.id;

    const observableResult = this.service.CdacProj(this.cdacProject);

    console.log(this.cdacProject);
    observableResult.subscribe((res: Base) => {

      if ( res.statusCode === 200 ) {
        this.showMessage = false;
        console.log(res.data);
        console.log(res.message);
        this.router.navigate(['/studenthome']);

      } else {
        this.showMessage = true;
        this.message = res.message;
        console.log(res.message);
      }
    });


  }


}
