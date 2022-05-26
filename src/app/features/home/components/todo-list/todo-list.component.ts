import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'fin-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listOfTodos: Todo[] = []
  //Decido se mostrare o meno la tabella dei todo
  atleastOne = true

  user_id: number = 0

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(
      result => {
        this.user_id = result['id']
        this.todoService.getTodosById(this.user_id).subscribe(
          items => {
            if (!result || items.length == 0 ) this.atleastOne = false
            else this.listOfTodos = items
          } , error => console.log(error)
        )
      }
    )
  }

}
