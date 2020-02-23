import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmaCompanyComponent } from './bma-company.component';

const routes: Routes = [{ path: '', component: BmaCompanyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BmaCompanyRoutingModule { }
