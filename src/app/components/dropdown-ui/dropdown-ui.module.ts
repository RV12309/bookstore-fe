import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownUiComponent } from './dropdown-ui.component';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    DropdownUiComponent
  ],
  imports: [
    CommonModule,
    DropdownModule
  ],
  exports: [
    DropdownUiComponent
  ],
})
export class DropdownUiModule { }
