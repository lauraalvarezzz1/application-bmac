import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BamCompanyListComponent } from './bam-company-list.component';

const routes: Routes = [{ path: '', component: BamCompanyListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BamCompanyListRoutingModule { }
