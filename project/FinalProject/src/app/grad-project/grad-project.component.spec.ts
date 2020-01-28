import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GradProjectComponent} from './grad-project.component';

describe('GradProjectComponent', () => {
  let component: GradProjectComponent;
  let fixture: ComponentFixture<GradProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GradProjectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
