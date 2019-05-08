import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'super_admin',
    loadChildren: './super-admin/super-admin.module#SuperAdminModule'
  },
  { 
    path: '',
    redirectTo: '/super_admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
