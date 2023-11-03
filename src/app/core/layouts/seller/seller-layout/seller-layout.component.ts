import { Component, OnInit } from '@angular/core';
import { IMenuSidebar } from "src/app/core/interfaces";

@Component({
  selector: 'app-seller-layout',
  templateUrl: './seller-layout.component.html',
  styleUrls: ['./seller-layout.component.scss']
})
export class SellerLayoutComponent implements OnInit{
  public menus:IMenuSidebar[] = [
    {
      icon: '',
      label: 'Quản lý sách',
      route: '',
      children: [
        {
          icon: 'ic-task-list.svg',
          title: 'Danh sách',
          key: '',
          route: '/seller/books'
        },
        {
          icon: 'ic-clipboard.svg',
          title: 'Danh mục',
          key: '',
          route: '/seller/books/categories'
        }
      ]
    },
    {
      icon: '',
      label: 'Quản lý đơn hàng',
      route: '',
      children: [
        {
          icon: 'ic-archive.svg',
          title: 'Danh sách',
          key: '',
          route: '/seller/order'
        }
      ]
    },
    {
      icon: '',
      label: 'Thống kê',
      route: '',
      children: [
        {
          icon: 'ic-dices.svg',
          title: 'Số lượng bán',
          key: '',
          route: '/seller/statistics'
        }
      ]
    }
  ]
  constructor(){

  }

  ngOnInit(): void {

  }

}
