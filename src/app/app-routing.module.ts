import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { NonPageModule } from "./components/non-page/non-page.module";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NotFoundModule } from "./components/not-found/not-found.module";
import { ComponentsModule } from "./components";
import { ComponentsComponent } from "./components/components.component";
import { SellerGuard } from "./core/guards/seller.guard";
import { LoggedGuard } from "./core/guards/logged.guard";
import { AppComponent } from "./app.component";


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('src/app/core/layouts/web-client/client-layout/client-layout.module').then(m => m.ClientLayoutModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('src/app/core/layouts/web-client/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'seller',
        loadChildren: () => import('src/app/core/layouts/seller/seller-layout/seller-layout.module').then(m => m.SellerLayoutModule),
        canActivate: [LoggedGuard, SellerGuard]
      },
      {
        path: 'components',
        loadChildren: () => import('src/app/components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), NotFoundModule, ComponentsModule],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
