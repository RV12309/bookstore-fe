import { Component, Input, OnInit } from '@angular/core';
import { StorageKey } from "src/app/core/enums";
import { IMenuSidebar } from "src/app/core/interfaces";
import { StoreService } from "src/app/core/services";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit{
  @Input() menuList!:IMenuSidebar[];

  public isExpand = true;

  constructor(
    private storeService:StoreService
  ){
  }

  ngOnInit(): void {
    this.isExpand = !this.storeService.getSession(StorageKey.isExpand)
  }

  expand(){
    this.isExpand =  !this.isExpand;
    this.storeService.setSession(StorageKey.isExpand, (this.isExpand)?'':'false')
  }
}
