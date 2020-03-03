import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLaborerRoutingModule } from './general-laborer-routing.module';
import { GeneralLaborerComponent } from './general-laborer.component';


@NgModule({
  declarations: [GeneralLaborerComponent],
  imports: [
    CommonModule,
    GeneralLaborerRoutingModule
  ]
})
export class GeneralLaborerModule { }
