import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '', redirectTo: '/sign/in', pathMatch: 'full'
  },
  {
    path: ':id', component: HomeContainerComponent,
    children: [
      {
        path: 'form',
        component: TodoFormComponent
      },
      {
        path: 'search',
        component: TodoSearchComponent
      },
      {
        path: 'list',
        component: TodoListComponent
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
