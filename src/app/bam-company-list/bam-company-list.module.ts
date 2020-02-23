import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamCompanyListRoutingModule } from './bam-company-list-routing.module';
import { BamCompanyListComponent } from './bam-company-list.component';


@NgModule({
  declarations: [BamCompanyListComponent],
  imports: [
    CommonModule,
    BamCompanyListRoutingModule
  ]
})
export class BamCompanyListModule { }
