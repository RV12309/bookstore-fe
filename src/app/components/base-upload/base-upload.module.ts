import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseUploadComponent } from './base-upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { PipesModule } from "src/app/core/pipes/pipes.module";
import { MessagesModule } from "primeng/messages";
import { ToastModule } from "primeng/toast";



@NgModule({
  declarations: [
    BaseUploadComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    PipesModule,
    MessagesModule,
    ToastModule
  ],
  exports: [
    BaseUploadComponent
  ],
})
export class BaseUploadModule { }
