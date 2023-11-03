import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { CardModule } from 'primeng/card';
import { PaginatorUiModule } from "./paginator-ui";
import { DropdownUiModule } from "./dropdown-ui/dropdown-ui.module";
import { InputTextUiModule } from "./input-text-ui/input-text-ui.module";

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PaginatorUiModule,
    DropdownUiModule,
    InputTextUiModule
  ]
})
export class ComponentsModule { }
