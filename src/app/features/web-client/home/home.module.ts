import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { AboutMeModule } from "src/app/components/about-me";
import { BookCardModule } from "src/app/components/book-card";



const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    AboutMeModule,
    BookCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
