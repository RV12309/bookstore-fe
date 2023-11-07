import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCategoriesCreateComponent } from './modal-categories-create.component';
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";



@NgModule({
  declarations: [
    ModalCategoriesCreateComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    ModalCategoriesCreateComponent
  ],
})
export class ModalCategoriesCreateModule { }
