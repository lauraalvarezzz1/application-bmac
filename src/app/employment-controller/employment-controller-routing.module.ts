import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploymentControllerComponent } from './employment-controller.component';

const routes: Routes = [{ path: '', component: EmploymentControllerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentControllerRoutingModule { }
