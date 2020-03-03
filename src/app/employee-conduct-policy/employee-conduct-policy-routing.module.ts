import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeConductPolicyComponent } from './employee-conduct-policy.component';

const routes: Routes = [{ path: '', component: EmployeeConductPolicyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeConductPolicyRoutingModule { }
