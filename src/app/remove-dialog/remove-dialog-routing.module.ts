import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveDialogComponent } from './remove-dialog.component';

const routes: Routes = [{ path: '', component: RemoveDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveDialogRoutingModule { }
