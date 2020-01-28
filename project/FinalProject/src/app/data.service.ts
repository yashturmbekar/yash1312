import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:9999/';

  constructor(public http: HttpClient) {
  }

  gradProj(gradProj) {
    return this.http.post(`${this.url}student/gardProject`, gradProj);
  }

  CdacProj(cdacProj) {
    return this.http.post(`${this.url}student/cdacProject`, cdacProj);
  }

  cdacDetails(cdacDetails) {
    return this.http.post(`${this.url}student/cdac`, cdacDetails);
  }
  gradDetails(gradDetails) {
    return this.http.post(`${this.url}student/grad`, gradDetails);
  }

  GetMyInfo(user) {
    return this.http.post(`${this.url}student/myDetails`, user);
  }

  acdmDetails(acdmDetails) {
    return this.http.post(`${this.url}student/acdm`, acdmDetails);
  }

  checkacdmDetails(acdmDetails) {
    return this.http.post(`${this.url}student/chechacdm`, acdmDetails);
  }

  setCriteria(critera) {
    return this.http.post(`${this.url}company/setcriteria`, critera);
  }

  ChangePassword(newUser) {
    return this.http.post(`${this.url}admin/updatepassword`, newUser);
  }

  Register(register) {
    return this.http.post(`${this.url}user/create`, register);
  }

  CompanyRegister(register) {
    return this.http.post(`${this.url}company/create`, register);
  }

  GetCompanyByEmail(company) {
    return this.http.post(`${this.url}admin/get_company_by_email`, company);
  }

  SendEmail(company) {
    console.log('email data: \n', company);
    return this.http.post(`${this.url}company/sendEmail`, company);
  }

  TrackDetails() {
    return this.http.get(`${this.url}admin/trackdetails`);
  }

  CompanyDetails() {
    return this.http.get(`${this.url}admin/allcompanydetails`);
  }

  StudentDac() {
    return this.http.get(`${this.url}admin/dac_students`);
  }

  StudentDbda() {
    return this.http.get(`${this.url}admin/dbda_students`);
  }

  StudentDmc() {
    return this.http.get(`${this.url}admin/dmc_students`);
  }

  StudentDesd() {
    return this.http.get(`${this.url}admin/desd_students`);
  }

  SelectByCompnay(user) {
    return this.http.post('http://localhost:9999/company/login', user);
  }

  SelectByUser(user) {
    return this.http.post('http://localhost:9999/user/login', user);
  }

  GetSubjectsByTrackId(trackId) {
    return this.http.get(`${this.url}user/subject/${trackId}`);
  }


}
