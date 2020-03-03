import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeConductPolicyRoutingModule } from './employee-conduct-policy-routing.module';
import { EmployeeConductPolicyComponent } from './employee-conduct-policy.component';


@NgModule({
  declarations: [EmployeeConductPolicyComponent],
  imports: [
    CommonModule,
    EmployeeConductPolicyRoutingModule
  ]
})
export class EmployeeConductPolicyModule { }
