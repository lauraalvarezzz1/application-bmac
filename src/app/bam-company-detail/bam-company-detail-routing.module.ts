import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BamCompanyDetailComponent } from './bam-company-detail.component';

const routes: Routes = [{ path: '', component: BamCompanyDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BamCompanyDetailRoutingModule { }
