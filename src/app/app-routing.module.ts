import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/core/layouts/web-client/in-login/in-login.module').then(m => m.InLoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/features/web-client/register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
