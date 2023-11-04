import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BookCreateModule } from '../book-create/book-create.module';
import { BookListComponent } from './book-list.component';

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
    BookCreateModule
  ],
  exports: [
    BookListComponent
  ],
})
export class BookListModule { }
