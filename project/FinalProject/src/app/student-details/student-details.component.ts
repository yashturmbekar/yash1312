import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Base } from '../models/Base';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  constructor(public router: Router,
              public service: DataService,
              public route: ActivatedRoute) {
  }
  preUser: any;
  user = {
    userDetailId: ''
  };
  cdacMarks: any;
  cdacPassyear: any;
  track: any;

  myDetails: any;

  validatingForm: FormGroup;

  @ViewChild('content', {static: false}) content: ElementRef;

  ngOnInit() {
    console.log(localStorage.getItem('user1'));
    this.preUser = JSON.parse(localStorage.getItem('user1'));
    this.user.userDetailId = this.preUser.id;
    console.log(this.preUser);

    const observableResult = this.service.GetMyInfo(this.user);
    observableResult.subscribe((res: Base) => {

      this.myDetails = res.data;
      if ( this.myDetails.trackId === 1) {
        this.track = 'DAC';
      } else if ( this.myDetails.trackId === 2 ) {
        this.track = 'DBDA';
      } else if ( this.myDetails.trackId === 3 ) {
        this.track = 'DMC';
      } else {
        this.track = 'DESD';
      }
      this.cdacPassyear = this.myDetails.cdac_marks[0].cdac_passYear;
      this.cdacMarks = this.myDetails.cdac_marks[0].cdac_degreePercent;
      console.log(this.myDetails);
    });
  }


  Screen() {
    const data = document.getElementById('content');
    html2canvas(data).then(canvas => {
        // Few necessary setting options
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('MyResume.pdf'); // Generated PDF
    });
}




}
