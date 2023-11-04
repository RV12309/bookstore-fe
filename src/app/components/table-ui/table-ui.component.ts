import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.scss']
})
export class TableUiComponent {
  @Input() headerTable = '';
  @Input() total = 0;
  @Input() isRefresh = true;
  public products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ]
}
