import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit{

  public createForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ){}
  ngOnInit(): void {
    this.initForm();
  }

  public initForm(){
    this.createForm = this.formBuilder.group({
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
    console.log(this.createForm?.value);
  }
}
