import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Base } from '../models/Base';
@Component({
  selector: 'app-company-critetia',
  templateUrl: './company-critetia.component.html',
  styleUrls: ['./company-critetia.component.scss']
})
export class CompanyCritetiaComponent implements OnInit {
  message: string;
  showMessage: boolean;
  preUser: any;
  critera = {
    iDate: '',
    iPlace: '',
    rDate: '',
    tech: '',
    stdCriteria: '',
    companyId: ''
  };
  constructor(public router: Router,
              private service: DataService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    console.log(localStorage.getItem('user1'));
    this.preUser = JSON.parse(localStorage.getItem('user1'));
    console.log(this.preUser);
    this.critera.companyId = this.preUser.id;
  }

  Insert() {

    const observableResult = this.service.setCriteria(this.critera);

    observableResult.subscribe((res: Base) => {

        if (res.statusCode === 200) {
          this.showMessage = false;
          console.log(res.data);

        } else {
          this.showMessage = true;
          this.message = res.message;
          console.log(res.message);
        }

      });


  }
}
