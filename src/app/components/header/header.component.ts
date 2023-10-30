import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ModalService } from 'src/app/core/services/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

    constructor(
        private route: Router,
        private categoryService: CategoryService
    ){
    }
    ngOnInit(): void {
        this.getCategory()
    }

  items = [
    {
        label: 'Options',
        items: [
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
        ]
    },
    {
        label: 'Navigate',
        items: [
            {
                label: 'Angular',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                routerLink: '/fileupload'
            }
        ]
    }
];

    getCategory(){
        this.categoryService.getCategoryList().subscribe({
            next: (res => {
                console.log(res)
            }),
            error: error => {
                console.log(error?.message)
              }
        })
    }

    navigateUser(){
        const token = sessionStorage.getItem('token');
        if(token){
            this.route.navigate(['/']);
            sessionStorage.removeItem('token');
        } else {
            this.route.navigate(['/auth/login']);
        }
    }

}
