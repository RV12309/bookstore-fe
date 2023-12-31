import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/core/layouts/web-client/in-login/in-login.module').then(m => m.InLoginModule),
    canActivate: []
  },

  {
    path: 'auth',
    loadChildren: () => import('src/app/core/layouts/web-client/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
