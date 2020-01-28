import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CdacComponent} from './cdac.component';

describe('CdacComponent', () => {
  let component: CdacComponent;
  let fixture: ComponentFixture<CdacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdacComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
