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
    const selectedItem: Option = {
      "option": option,
      "item": item
    }
    this.optionEvent.emit(selectedItem)
  }

}
