import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/core/layouts/web-client/in-login/in-login.module').then(m => m.InLoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/features/web-client/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/features/web-client/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
