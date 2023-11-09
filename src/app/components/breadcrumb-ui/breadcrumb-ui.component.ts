import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-breadcrumb-ui',
  templateUrl: './breadcrumb-ui.component.html',
  styleUrls: ['./breadcrumb-ui.component.scss']
})
export class BreadcrumbUiComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    console.log(this.route.root);
    console.log(this.route.routeConfig);
    const routeConfig = this.route.routeConfig;

      this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

      this.home = { label: 'Trang chủ',iconClass:"hidden", routerLink: '/seller' };
  }
}
