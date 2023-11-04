import { Component, OnInit } from '@angular/core';
import { FilterComponent } from "src/app/components/filter/filter.component";
import { HeaderComponent } from "src/app/components/header";
import { IFilterItem, InputType } from "src/app/core/interfaces";
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
      name: '',
      label: 'Tên sách',
      icon: 'assets/icons/default/ic-archive.svg',
      placeholder: 'Nhập tên sách'
    },
    {
      type: InputType.Select,
      name: '',
      label: 'Danh mục',
      icon: 'assets/icons/default/ic-archive.svg'
    },
    {
      type: InputType.DatePicker,
      name: '',
      label: 'Ngày tạo',
      icon: 'assets/icons/default/ic-archive.svg'
    }
  ]
  constructor(
    private modalService: ModalService
  ){

  }

  ngOnInit(): void {
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
