import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentControllerRoutingModule } from './employment-controller-routing.module';
import { EmploymentControllerComponent } from './employment-controller.component';


@NgModule({
  declarations: [EmploymentControllerComponent],
  imports: [
    CommonModule,
    EmploymentControllerRoutingModule
  ]
})
export class EmploymentControllerModule { }
