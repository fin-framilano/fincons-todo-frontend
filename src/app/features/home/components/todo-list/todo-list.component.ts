import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { OptionEnum } from 'src/app/shared/enums/option-enum';
import { TodoEnum } from 'src/app/shared/enums/todo-enum';
import { Option } from 'src/app/shared/models/option-model';
import { Todo } from 'src/app/shared/models/todo-model';
import { CrudUtils } from 'src/app/shared/utils/crud.utils';

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
            else {
              this.listOfTodos = items.map(t => {
                  if (t.status === "TODO") t.status = TodoEnum.TODO
                  if (t.status === "IN_PROGRESS") t.status = TodoEnum.IN_PROGRESS
                  if (t.status === "DONE") t.status = TodoEnum.DONE
                  return t
                }
              )  
              this.listOfTodos = CrudUtils.sortArrayByField(this.listOfTodos, "dueDate")
            }
          } , error => console.log(error)
        )
      }
    )
  }

  optionHandler(selected_option: Option) {
    switch (selected_option.option) {
      case OptionEnum.ELIMINA:
        this.todoService.deleteTodo(selected_option.item_id).subscribe(
          result => {
            this.listOfTodos = CrudUtils.removeFromArrayById(this.listOfTodos, selected_option.item_id)
          }, error => console.log(error)
        )
        break
    }
  }

}
