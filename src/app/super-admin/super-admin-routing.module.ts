import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const superAdminRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '',
      component: SuperAdminComponent,
      children: [
        {
          path: '',
          children: [
            {path: 'home', component: HomeComponent},
            {path: 'fileUpload', component: FileUploadComponent}
          ]
        }
      ]
    },
    // { 
    //   path: '',
    //   redirectTo: '/login',
    //   pathMatch: 'full'
    // }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(superAdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SuperAdminRoutingModule {}