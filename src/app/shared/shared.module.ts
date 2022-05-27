import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';



@NgModule({
  declarations: [CommonTableComponent, ModalDialogComponent],
  imports: [
    CommonModule
  ], exports: [CommonTableComponent, ModalDialogComponent]
})
export class SharedModule { }
