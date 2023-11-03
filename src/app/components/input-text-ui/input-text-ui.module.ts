import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextUiComponent } from './input-text-ui.component';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    InputTextUiComponent
  ],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    InputTextUiComponent
  ]
})
export class InputTextUiModule { }
