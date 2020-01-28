import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCritetiaComponent } from './company-critetia.component';

describe('CompanyCritetiaComponent', () => {
  let component: CompanyCritetiaComponent;
  let fixture: ComponentFixture<CompanyCritetiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCritetiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCritetiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
