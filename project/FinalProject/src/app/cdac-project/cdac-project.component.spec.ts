import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CdacProjectComponent} from './cdac-project.component';

describe('CdacProjectComponent', () => {
  let component: CdacProjectComponent;
  let fixture: ComponentFixture<CdacProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdacProjectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdacProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
