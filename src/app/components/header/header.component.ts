import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from "primeng/menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuUser', {static: false}) menuUser!:Menu;

    constructor(
        private route: Router
    ){
    }

  items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: () => {
      }
  },
  {
      label: 'Delete',
      icon: 'pi pi-times',
      command: () => {
      }
  }
];

    navigateUser(){
      console.log(true);

      this.menuUser.toggle;
      return;
        const token = sessionStorage.getItem('token');
        if(token){
            this.route.navigate(['/']);
            sessionStorage.removeItem('token');
        } else {
            this.route.navigate(['/auth/login']);
        }
    }

}
