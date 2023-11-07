import { Routes } from "@angular/router";
import { SellerLayoutComponent } from "./seller-layout.component";
import { HomeComponent } from "src/app/features/web-client/home/home.component";

export const routes:Routes = [
  {
    path: '',
    component: SellerLayoutComponent,
    children: [
      {
        path:'books',
        loadChildren: () => import('src/app/features/seller/books/book-list/book-list.module').then(m => m.BookListModule)
      },
      {
        path:'books/categories',
        loadChildren: () => import('src/app/features/seller/categories/categories-list/categories-list.module').then(m => m.CategoriesListModule)
      },
      {
        path: 'order',
        component: HomeComponent
      },
      {
        path: 'statistics',
        component : HomeComponent
      },
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      }
    ]
  }
]