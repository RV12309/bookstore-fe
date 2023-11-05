import { Component, OnInit, Input } from '@angular/core';
import { IFilterItem, InputType } from "src/app/core/interfaces";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  @Input() filterKeys:IFilterItem<any>[] = [];

  public InputType = InputType;
  constructor(){

  }
  ngOnInit(): void {

  }
}
