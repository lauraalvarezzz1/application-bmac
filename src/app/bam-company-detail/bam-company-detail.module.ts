import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamCompanyDetailRoutingModule } from './bam-company-detail-routing.module';
import { BamCompanyDetailComponent } from './bam-company-detail.component';


@NgModule({
  declarations: [BamCompanyDetailComponent],
  imports: [
    CommonModule,
    BamCompanyDetailRoutingModule
  ]
})
export class BamCompanyDetailModule { }
