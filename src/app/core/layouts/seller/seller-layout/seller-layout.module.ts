import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerLayoutComponent } from './seller-layout.component';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { SidebarMenuModule } from "src/app/components/sidebar-menu/sidebar-menu.module";
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbUiModule } from "src/app/components/breadcrumb-ui/breadcrumb-ui.module";
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    SellerLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarMenuModule,
    InputTextModule,
    DividerModule,
    AvatarModule,
    BreadcrumbUiModule,
    MenuModule,
    BadgeModule
  ]
})
export class SellerLayoutModule { }
