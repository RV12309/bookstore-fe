import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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

}
