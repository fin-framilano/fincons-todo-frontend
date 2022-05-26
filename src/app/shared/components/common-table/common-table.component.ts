import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../../models/option-model';

@Component({
  selector: 'fin-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {


  @Input()
  headers: string[] = []

  @Input()
  fields: string[] = []

  @Input()
  items: any[] = []

  @Input()
  options: string[] = []

  @Output()
  optionEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  clickOnOptions(option: number, item: any) {
    console.log("You clicked on\nOption:" + option + "\nItem with ID: " + item.id)
    const selectedItem: Option = {
      "option": option,
      "item_id": item.id
    }
    this.optionEvent.emit(selectedItem)
  }

}
