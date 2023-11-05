import { Component, OnInit } from '@angular/core';
import { FilterComponent } from "src/app/components/filter/filter.component";
import { HeaderComponent } from "src/app/components/header";
import { IFilterItem, InputType } from "src/app/core/interfaces";
import { ITitleTable } from "src/app/core/interfaces/table.interface";
import { BooksService } from "src/app/core/services/books/books.service";
import { ModalService } from "src/app/core/services/modal";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  public filterKeys:IFilterItem<any>[] = [
    {
      type: InputType.Input,
      controlName: 'title',
      label: 'Tên sách',
      icon: 'assets/icons/default/ic-archive.svg',
      placeholder: 'Nhập tên sách'
    },
    {
      type: InputType.Select,
      controlName: 'categoryId',
      label: 'Danh mục',
      icon: 'assets/icons/default/ic-archive.svg'
    },
    // {
    //   type: InputType.DatePicker,
    //   controlName: '',
    //   label: 'Ngày tạo',
    //   icon: 'assets/icons/default/ic-archive.svg',
    //   placeholder: 'Chọn ngày tạo'
    // }
  ];

  public titleTable:ITitleTable[] = [
    {
      title: 'Tiêu đề'
    },
    {
      title: 'Tác giả'
    },
    {
      title: 'Giá'
    },
    {
      title: 'Số lượng'
    },
    {
      title: 'Số trang'
    }
  ]
  constructor(
    private modalService: ModalService,
    private booksService: BooksService
  ){

  }

  ngOnInit(): void {
    this.changeParams()
  }

  changeParams(){
    this.booksService.getBooksList(
      {
        page: 0,
        size: 10
      }
    ).subscribe()
  }

  create(){
    this.modalService.alert(
      {
        message: 'Bạn xác nhận tạo sách ?',
        accept: () => {
          console.log('Đã accept')
        }
      }
    )
  }
}
