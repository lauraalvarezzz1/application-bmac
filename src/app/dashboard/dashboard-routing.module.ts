import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent, children: [
  { path: 'bam-company-list', loadChildren: () => import('../bam-company-list/bam-company-list.module').then(m => m.BamCompanyListModule) },
  { path: 'bma-company', loadChildren: () => import('../bma-company/bma-company.module').then(m => m.BmaCompanyModule) },
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
