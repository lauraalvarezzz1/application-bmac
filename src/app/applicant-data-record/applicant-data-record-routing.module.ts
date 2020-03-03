import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantDataRecordComponent } from './applicant-data-record.component';

const routes: Routes = [{ path: '', component: ApplicantDataRecordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantDataRecordRoutingModule { }
