import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { RouterModule, Routes } from "@angular/router";
import { FilterModule } from "src/app/components/filter/filter.module";

const routes:Routes = [
  {
    path: '',
    component: BookListComponent
  }
]

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FilterModule
  ],
  exports: [
    BookListComponent
  ],
})
export class BookListModule { }
