import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamCompanyListRoutingModule } from './bam-company-list-routing.module';
import { BamCompanyListComponent } from './bam-company-list.component';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BamCompanyListComponent],
  imports: [
    BamCompanyListRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BamCompanyListComponent
  ]
})
export class BamCompanyListModule { }
