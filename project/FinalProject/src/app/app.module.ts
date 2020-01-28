import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthService} from './auth.service';
import {RegisterComponent} from './register/register.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {GraduationComponent} from './graduation/graduation.component';
import {AcademicComponent} from './academic/academic.component';
import {CdacComponent} from './cdac/cdac.component';
import {GradProjectComponent} from './grad-project/grad-project.component';
import {CdacProjectComponent} from './cdac-project/cdac-project.component';
import {ProgressbarComponent} from './progressbar/progressbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {ToastrModule} from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminCompanyComponent } from './admin-company/admin-company.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { StudentCompanyComponent } from './student-company/student-company.component';
import { CompanyCritetiaComponent } from './company-critetia/company-critetia.component';
import { CompanyStudentComponent } from './company-student/company-student.component';
import { AdminViewResumeComponent } from './admin-view-resume/admin-view-resume.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    StudentDetailsComponent,
    GraduationComponent,
    AcademicComponent,
    CdacComponent,
    GradProjectComponent,
    CdacProjectComponent,
    ProgressbarComponent,
    ContactComponent,
    CompanyRegisterComponent,
    UserprofileComponent,
    StudentHomeComponent,
    CompanyLoginComponent,
    AdminHomeComponent,
    AdminStudentComponent,
    AdminCompanyComponent,
    CompanyHomeComponent,
    StudentCompanyComponent,
    CompanyCritetiaComponent,
    CompanyStudentComponent,
    AdminViewResumeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([

      {path: '', component: HomeComponent, canActivate: [AuthService]},
      {path: 'home', component: HomeComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'stdinfo', component: StudentDetailsComponent},
      {path: 'acdm', component: AcademicComponent, canActivate: [AuthService]},
      {path: 'gradu', component: GraduationComponent},
      {path: 'cdac', component: CdacComponent},
      {path: 'gradproject', component: GradProjectComponent},
      {path: 'cdacproject', component: CdacProjectComponent},
      {path: 'cmpregister', component: CompanyRegisterComponent},
      {path: 'userprofile', component: UserprofileComponent},
      {path: 'studenthome', component: StudentHomeComponent},
      {path: 'admhome', component: AdminHomeComponent},
      {path: 'cmphome', component: CompanyHomeComponent},
      {path: 'cmplogin', component: CompanyLoginComponent},
      {path: 'stddetails', component: AdminStudentComponent},
      {path: 'cmpdetails', component: AdminCompanyComponent},
      {path: 'stdcmp', component: StudentCompanyComponent},
      {path: 'cmpcriteria', component: CompanyCritetiaComponent},
      {path: 'cmpstudent', component: CompanyStudentComponent},
      {path: 'admviewresume', component: AdminViewResumeComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
