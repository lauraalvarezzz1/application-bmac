import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmaCompanyRoutingModule } from './bma-company-routing.module';
import { BmaCompanyComponent } from './bma-company.component';
import { MaterialModule } from '../material.module';
import { BamCompanyListModule } from '../bam-company-list/bam-company-list.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BmaCompanyComponent],
  imports: [
    CommonModule,
    BmaCompanyRoutingModule,
    MaterialModule,
    BamCompanyListModule,
    HttpClientModule
  ]
})
export class BmaCompanyModule { }
