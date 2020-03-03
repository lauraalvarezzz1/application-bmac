import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { BamCompanyListModule } from '../bam-company-list/bam-company-list.module';
import { BmaCompanyModule } from '../bma-company/bma-company.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HeaderModule,
    BamCompanyListModule,
    BmaCompanyModule
  ]
})
export class DashboardModule { }
