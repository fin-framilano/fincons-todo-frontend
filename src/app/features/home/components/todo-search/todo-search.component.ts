import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'fin-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {

  user_id: number = 0

  todoQuery: string = ""

  listOfAllTodos: Todo[] = []
  listOfTodos: Todo[] = []

  atleastOne: boolean = false

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    //Recupero l'id dell'utente e setto la data minima per l'inserimento di un promemoria
    
    this.route.parent?.params.subscribe(
      result => {
        this.user_id = result['id']
        this.todoService.getTodosById(this.user_id).subscribe(
          items => {
            if (!result || items.length == 0 ) this.atleastOne = false
            else this.listOfAllTodos = items
          }, error => console.log(error)
        )
      }
    )
  }

  searchTodo() {
    this.listOfTodos = []
    this.listOfAllTodos.forEach(todo => {
      if (this.todoQuery.length !== 0 && todo.content.toLowerCase().includes(this.todoQuery.toLowerCase())) {
        this.listOfTodos.push(todo)
      }
    });
  }

}
