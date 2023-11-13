import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ISelectItem } from 'src/app/core/interfaces';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { DropdownService } from 'src/app/core/services/dropdown.service';
import { UploadService } from "src/app/core/services/upload.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit{

  public formBook!: FormGroup;
  public selectedFile: File | null = null;
  public categories:ISelectItem[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private modalRef: DynamicDialogRef,
    private uploadService: UploadService,
    private categoryService: CategoryService,
    private dropdownService: DropdownService
  ){}
  ngOnInit(): void {
    this.initForm();
    this.getCategoryList();
  }

  public initForm(){
    this.formBook = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: [null, Validators.required],
      publisher: ['', Validators.required],
      publishDate: ['', Validators.required],
      numberOfPage: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required]
    })
  }

  submit(){
    console.log(this.formBook?.value);
  }

  closeModal(){
    this.modalRef.close();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  getCategoryList(){
    this.categoryService.getCategoryAll()
    .subscribe({
      next: resp => {
        this.categories = this.dropdownService.renderList(
          resp?.data,
          'name',
          'id'
        );
        console.log(this.categories, 'this.categories');
      }
    })
  }

  uploadImage() {
    if (this.selectedFile) {
      this.uploadService.uploadImage(this.selectedFile).subscribe(
        response => {
          console.log('Upload successful!', response);
        },
        error => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  public get formControls() {
    return this.formBook.controls;
  }
}
