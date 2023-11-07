import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { CardModule } from 'primeng/card';
import { PaginatorUiModule } from "./paginator-ui";
import { DropdownUiModule } from "./dropdown-ui/dropdown-ui.module";
import { InputTextUiModule } from "./input-text-ui/input-text-ui.module";
import { RouterModule, Routes } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { FileUploadModule } from 'primeng/fileupload';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent
  }
]

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PaginatorUiModule,
    DropdownUiModule,
    InputTextUiModule,
    RouterModule.forChild(routes),
    ButtonModule,
    FileUploadModule
  ]
})
export class ComponentsModule { }
