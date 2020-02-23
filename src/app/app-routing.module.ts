import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'bma-company', loadChildren: () => import('./bma-company/bma-company.module').then(m => m.BmaCompanyModule) }, { path: 'bam-company-list', loadChildren: () => import('./bam-company-list/bam-company-list.module').then(m => m.BamCompanyListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
