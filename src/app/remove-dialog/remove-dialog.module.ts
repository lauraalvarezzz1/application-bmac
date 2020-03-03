import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveDialogRoutingModule } from './remove-dialog-routing.module';
import { RemoveDialogComponent } from './remove-dialog.component';


@NgModule({
  declarations: [RemoveDialogComponent],
  imports: [
    CommonModule,
    RemoveDialogRoutingModule
  ]
})
export class RemoveDialogModule { }
