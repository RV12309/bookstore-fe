import { Component, OnInit } from '@angular/core';
import { ICategoryData } from "src/app/core/interfaces/category.interface";
import { ITitleTable } from "src/app/core/interfaces/table.interface";
import { CategoryService } from "src/app/core/services/category/category.service";
import { ModalCategoriesCreateComponent } from "../modal-categories-create/modal-categories-create.component";
import { ModalSize } from "src/app/core/enums";
import { ModalService } from "src/app/core/services/modal";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit{

  public titleTable:ITitleTable[] = [
    {
      title: 'Tên danh mục'
    }
  ];
  public dataTable:ICategoryData[] = [];
  public total = 0;
  constructor(
    private categoryService: CategoryService,
    private modalService: ModalService
  ){

  }

  ngOnInit(): void {
    // this.getList();
    this.getAll();
  }

  getAll(){
    this.categoryService.getCategoryAll()
    .subscribe({
      next: resp => {
        console.log(resp);
        this.dataTable = resp.data;
        this.total = this.dataTable?.length

      }
    })
  }
  getList(){
    this.categoryService.searchCategory(
      {
        size: 10,
        page: 1
      }
    ).subscribe({
      next: resp => {
        console.log(resp);

      }
    })
  }

  create(){
    this.modalService.open(
      ModalCategoriesCreateComponent,
      {
        header: 'Tạo mới danh mục',
      }
    )
  }

  view(item:ICategoryData){

    this.modalService.open(
      ModalCategoriesCreateComponent,
      {
        header: 'Chi tiết danh mục',
      }
    )
  }

  refreshData(){
    this.getAll();
  }

  searchChange(event:any){
    console.log(event);
  }
}
