import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'fin-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  insertedContent: string = ""
  insertedDate: Date = new Date()

  user_id: number = 0

  minimum_due: string = ""

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    //Recupero l'id dell'utente e setto la data minima per l'inserimento di un promemoria
    this.insertedDate = new Date()
    this.insertedDate.setSeconds(0, 0)
    this.minimum_due = this.insertedDate.toISOString().replace(":00.000Z", "")
    this.route.parent?.params.subscribe(
      result => {
        this.user_id = result['id']
      }
    )
  }

  completeTodoForm(todoForm: NgForm) {
    let currentDate = new Date()
    if (typeof (todoForm.value.campoDate) === "string") todoForm.value.campoDate = new Date(todoForm.value.campoDate)
    if (todoForm.value.campoDate.getTime() === this.insertedDate.getTime()) {
      console.log("Fallback to currentDate + fallback_days")
      todoForm.value.campoDate = new Date("1970-01-01T01:00")
    }

    todoForm.value.campoDate.setSeconds(0, 0)
    currentDate.setSeconds(0, 0)

    const todo: Todo = {
      "id": 0,
      "content": todoForm.value.campoContent,
      "dueDate": todoForm.value.campoDate.toISOString().replace(":00.000Z", ""),
      "createdAt": currentDate.toISOString().replace(":00.000Z", ""),
      "status": "TODO",
      "userId": this.user_id
    }

    this.todoService.createTodo(todo).subscribe(
      () => {
        this.router.navigateByUrl("home/" + this.user_id + "/list")
        alert("Nuovo promemoria creato con successo")
      }, error => console.log(error)
    )
  }

}