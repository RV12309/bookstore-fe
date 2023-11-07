import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { CategoryService } from "src/app/core/services/category/category.service";

@Component({
  selector: 'app-modal-categories-create',
  templateUrl: './modal-categories-create.component.html',
  styleUrls: ['./modal-categories-create.component.scss']
})
export class ModalCategoriesCreateComponent implements OnInit{

  public form!:FormGroup;

  constructor(
    private modalRef: DynamicDialogRef,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ){

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    })
  }

  submit(){
    if(this.form.invalid){
      return;
    }
    this.categoryService.create(this.form?.value)
    .subscribe({
      next: resp => {
        console.log(resp);
      }
    })
  }
  closeModal(){
    this.modalRef.close();
  }
}
