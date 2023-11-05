import { Component, Input, OnInit } from '@angular/core';
import { ISelectItem } from "src/app/core/interfaces";

@Component({
  selector: 'app-dropdown-ui',
  templateUrl: './dropdown-ui.component.html',
  styleUrls: ['./dropdown-ui.component.scss']
})
export class DropdownUiComponent implements OnInit{
  @Input() editable = false;
  @Input() optionLabel = "name";
  @Input() placeholder = "";
  @Input() disabled = false;
  @Input() filter = false;
  @Input() dataList:ISelectItem[] = [];

  public cities:ISelectItem[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  constructor(){}

  ngOnInit(): void {
    this.dataList = this.dataList || this.cities;
  }
}
