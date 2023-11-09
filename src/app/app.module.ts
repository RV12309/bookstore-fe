import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from "./core/services/modal";
import { DialogService } from "primeng/dynamicdialog";
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from "primeng/button";
import { CloudinaryModule } from "@cloudinary/ng";
import { RequestInterceptor } from "./core/interceptors/request.interceptor";
import { ResponseInterceptor } from "./core/interceptors/response.interceptor";
import { MessageService } from "primeng/api";
import { LoadingModule } from "./components/loading/loading.module";
import { LoadingInterceptor } from "./core/interceptors/loading.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule,
    ToastModule,
    ButtonModule,
    CloudinaryModule,
    LoadingModule
  ],
  providers: [
    DialogService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
