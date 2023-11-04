import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";



@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    FilterComponent
  ],
})
export class FilterModule { }
