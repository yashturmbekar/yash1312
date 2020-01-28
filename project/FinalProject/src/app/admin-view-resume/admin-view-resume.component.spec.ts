import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewResumeComponent } from './admin-view-resume.component';

describe('AdminViewResumeComponent', () => {
  let component: AdminViewResumeComponent;
  let fixture: ComponentFixture<AdminViewResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
