import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InLoginRoutingModule } from './in-login-routing.module';
import { InLoginComponent } from './in-login/in-login.component';


@NgModule({
  declarations: [
    InLoginComponent
  ],
  imports: [
    CommonModule,
    InLoginRoutingModule
  ]
})
export class InLoginModule { }
