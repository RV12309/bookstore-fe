import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-ui',
  templateUrl: './dropdown-ui.component.html',
  styleUrls: ['./dropdown-ui.component.scss']
})
export class DropdownUiComponent {
  @Input() editable = false;
  @Input() optionLabel = "name";
  @Input() placeholder = "";
  @Input() disabled = false;


  public cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
}
