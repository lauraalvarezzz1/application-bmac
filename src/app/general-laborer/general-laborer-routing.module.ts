import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralLaborerComponent } from './general-laborer.component';

const routes: Routes = [{ path: '', component: GeneralLaborerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralLaborerRoutingModule { }
