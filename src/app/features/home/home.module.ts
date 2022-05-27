import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoService } from 'src/app/core/services/todo.service';
import { ModalEditingComponent } from './components/modal-editing/modal-editing.component';



@NgModule({
  declarations: [
    HomeContainerComponent,
    TodoListComponent,
    TodoSearchComponent,
    TodoFormComponent,
    ModalEditingComponent
  ],
  imports: [
    CommonModule, HomeRoutingModule, NavbarModule, HomeRoutingModule, FormsModule, SharedModule
  ], providers: [TodoService]
})
export class HomeModule { }
