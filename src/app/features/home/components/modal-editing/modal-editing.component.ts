import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fin-modal-editing',
  templateUrl: './modal-editing.component.html',
  styleUrls: ['./modal-editing.component.css']
})
export class ModalEditingComponent implements OnInit {

  @Input()
  old_content: string = "Some text here"

  @Input()
  user_id: number = 0

  @Input()
  todo_id: number = 0

  @Output()
  updateTodoEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('myModal', { static: false })
  modal!: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  updateTodoHandler() {
    this.updateTodoEvent.emit()
    this.close()
  }

}
