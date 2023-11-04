import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal';
import { BookCreateComponent } from '../book-create/book-create.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  constructor(
    private modalService: ModalService
  ){}

  addBook(){
    const modalConfig = {
      header: 'Thêm sách',
      contentStyle: 'auto'
    }
    this.modalService.open(BookCreateComponent, modalConfig);
  }
}
