import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUiComponent } from './table-ui.component';
import { TableModule } from 'primeng/table';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    TableUiComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [
    TableUiComponent
  ],
})
export class TableUiModule { }
