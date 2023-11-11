import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ISelectItem } from "src/app/core/interfaces";

@Component({
  selector: 'app-dropdown-ui',
  templateUrl: './dropdown-ui.component.html',
  styleUrls: ['./dropdown-ui.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownUiComponent,
      multi: true,
    }
  ]
})
export class DropdownUiComponent implements OnInit, ControlValueAccessor {
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

  public selectedValue!:ISelectItem;

  onChange!: (provinceData: any) => void;
  onTouched!: () => void;

  constructor(
    private formGroupDirective: FormGroupDirective
  ){}


  ngOnInit(): void {
    this.selectedValue = this.cities[2]
    this.dataList = this.dataList || this.cities;
  }

  changeValue(e:any){
    console.log(e);

  }

  writeValue(value: any) {
    console.log('writeValue',value);
    // this.selectedValue = value;
  }

  registerOnChange(fn: any) {
  }

  registerOnTouched(fn: any) {
  }

  setDisabledState(isDisabled: boolean) {
  }
}
