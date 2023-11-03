import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonPageComponent } from './non-page.component';
import { ButtonModule } from "primeng/button";



@NgModule({
  declarations: [
    NonPageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class NonPageModule { }
