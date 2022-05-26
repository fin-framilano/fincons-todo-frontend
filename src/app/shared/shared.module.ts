import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './components/common-table/common-table.component';



@NgModule({
  declarations: [CommonTableComponent],
  imports: [
    CommonModule
  ], exports: [CommonTableComponent]
})
export class SharedModule { }
