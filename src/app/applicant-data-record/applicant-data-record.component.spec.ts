import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDataRecordComponent } from './applicant-data-record.component';

describe('ApplicantDataRecordComponent', () => {
  let component: ApplicantDataRecordComponent;
  let fixture: ComponentFixture<ApplicantDataRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantDataRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantDataRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
