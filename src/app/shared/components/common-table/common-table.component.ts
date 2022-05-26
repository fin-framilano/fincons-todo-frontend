import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fin-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {


  @Input()
  headers: any[] = []

  @Input()
  fields: any[] = []

  @Input()
  items: any[] = []

  listOfOptions: string[] = ["Seleziona", "Elimina", "Modifica"]

  @Output()
  optionEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  optionHandler(event: any) {
    this.optionEvent.emit(event)
  }

}
