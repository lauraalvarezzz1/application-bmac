import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmaCompanyRoutingModule } from './bma-company-routing.module';
import { BmaCompanyComponent } from './bma-company.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [BmaCompanyComponent],
  imports: [
    CommonModule,
    BmaCompanyRoutingModule,
    MaterialModule
  ]
})
export class BmaCompanyModule { }
