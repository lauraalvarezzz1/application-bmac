import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'bma-company', loadChildren: () => import('./bma-company/bma-company.module').then(m => m.BmaCompanyModule) },
  { path: 'bam-company-detail', loadChildren: () => import('./bam-company-detail/bam-company-detail.module').then(m => m.BamCompanyDetailModule) },
  { path: 'remove-dialog', loadChildren: () => import('./remove-dialog/remove-dialog.module').then(m => m.RemoveDialogModule) },
  { path: 'general-laborer', loadChildren: () => import('./general-laborer/general-laborer.module').then(m => m.GeneralLaborerModule) },
  { path: 'applicant-data-record', loadChildren: () => import('./applicant-data-record/applicant-data-record.module').then(m => m.ApplicantDataRecordModule) },
  { path: 'employee-conduct-policy', loadChildren: () => import('./employee-conduct-policy/employee-conduct-policy.module').then(m => m.EmployeeConductPolicyModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'employment-controller', loadChildren: () => import('./employment-controller/employment-controller.module').then(m => m.EmploymentControllerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
