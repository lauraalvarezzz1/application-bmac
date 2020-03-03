import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantDataRecordRoutingModule } from './applicant-data-record-routing.module';
import { ApplicantDataRecordComponent } from './applicant-data-record.component';


@NgModule({
  declarations: [ApplicantDataRecordComponent],
  imports: [
    CommonModule,
    ApplicantDataRecordRoutingModule
  ]
})
export class ApplicantDataRecordModule { }
