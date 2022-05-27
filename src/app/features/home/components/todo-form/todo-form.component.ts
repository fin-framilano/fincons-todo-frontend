import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { TodoEnum } from 'src/app/shared/enums/todo-enum';
import { Todo } from 'src/app/shared/models/todo-model';

/**
 * Componente utilizzato singolarmente per la creazione di un nuovo form
 * Ma anche riutilizzato all'interno del dialogo della modifica di un TODO
 * già esistente
 */

@Component({
  selector: 'fin-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  //Questo Input()  è utile per il riutilizzo di questo form per la modifica e non la creazione
  //L'output avvisa il padre dell'avvenuto aggiornamento della lista dei todo

  @Input()
  todo_id: number = 0

  @Output()
  updateTodoEvent: EventEmitter<any> = new EventEmitter<any>()


  //Campi necessari all'NgForm
  insertedContent: string = ""
  insertedDate: Date = new Date()
  insertedStatus: string = ""

  //Opzioni di Stato Todo recuperate dalla TodoEnum
  statusOptions: string[] = []

  //Id utente recuperato dalla url
  user_id: number = 0

  //Data minima, utile per impedire il settaggio di promemoria nel passato
  minimum_due: string = ""


  //Messaggio di errore in caso il form restituisca un 400 dal backend
  form_error: boolean = false

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }
  /**
   * Recupero l'id dell'utente e setto la data minima per l'inserimento di un promemoria
   */
  ngOnInit(): void {
    this.insertedDate = new Date()
    this.insertedDate.setSeconds(0, 0)
    this.minimum_due = this.insertedDate.toISOString().replace(":00.000Z", "")
    this.route.parent?.params.subscribe(
      result => {
        this.user_id = result['id']
      }
    )

    //Recupero gli stati possibili per un Todo dalla sua enumerazione
    this.statusOptions = Object.values(TodoEnum)
  }

  /**
   * Costruisco la string contenente il formato desiderato per la data:
   * YYYY-MM-DD HH:DD:SS
   * @param date 
   * @returns stringa con data formattata in locale
   */
  buildLocaleDate(date: Date) {
    let formattedString: string = ""

    formattedString += date.getFullYear() + "-"

    if (date.getMonth() < 10) formattedString += "0" + (date.getMonth() + 1) + "-"
    else formattedString += date.getMonth() + 1 + "-"

    if (date.getDate() < 10) formattedString += "0" + date.getDate() + " "
    else formattedString += date.getDate() + " "

    if (date.getHours() < 10) formattedString += "0" + date.getHours() + ":"
    else formattedString += date.getHours() + ":"


    if (date.getMinutes() < 10) formattedString += "0" + date.getMinutes() + ":00"
    else formattedString += date.getMinutes() + ":00"

    return formattedString
  }

  /**
   * Recupero la chiave di un enum dato il valore
   * @param value 
   * @returns 
   */
  getKeyByValue(value: string) {
    const indexOfS = Object.values(TodoEnum).indexOf(value as unknown as TodoEnum);

    const key = Object.keys(TodoEnum)[indexOfS];

    return key;
  }

  completeTodoForm(todoForm: NgForm) {
    let currentDate = new Date()
    /**Se campoDate è una stringa significa che tutti i suoi campi sono stati compilati correttamente
    * A questo punto genero una nuova Date
    *
    * Se invece il campo non è una stringa, significa che è stato mantenuto il valore iniziale dato dall'NgOnInit
    * Se le due date corrispondono, allora il campoDate non è stato compilato correttamente, ricado nel caso di fallback
    * con la data 1970-01-01T01:00
    **/
    if (typeof (todoForm.value.campoDate) === "string") todoForm.value.campoDate = new Date(todoForm.value.campoDate)
    if (todoForm.value.campoDate.getTime() === this.insertedDate.getTime()) {
      todoForm.value.campoDate = new Date("1970-01-01T01:00")
    }

    //Azzero secondi e millisecondi poichè poco interessanti
    todoForm.value.campoDate.setSeconds(0, 0)
    currentDate.setSeconds(0, 0)

    const todo: Todo = {
      // Il campo todo_id è diverso da 0 solamente se questo componente
      // è istanziato al di fuori del form di creazione
      "id": this.todo_id,
      "content": todoForm.value.campoContent,
      "dueDate": this.buildLocaleDate(todoForm.value.campoDate),
      "createdAt": this.buildLocaleDate(currentDate),
      "status": this.getKeyByValue(todoForm.value.campoStatus),
      "userId": this.user_id
    }

    //Controllo se in form è in utilizzo in creazione o modifica
    //Se todo_id è 0, significa che l'oggetto è nuovo e in creazione
    if (this.todo_id == 0) {
      this.todoService.createTodo(todo).subscribe(
        () => {
          this.router.navigateByUrl("home/" + this.user_id + "/list")
        }, error => {
          console.log(error)
          this.form_error = true
        }
      )
    } else {
      this.todoService.updateTodo(this.todo_id, todo).subscribe(
        () => {
          this.router.navigateByUrl("home/" + this.user_id + "/list")
          this.updateTodoEvent.emit()
        }, error => {
          console.log(error)
          this.form_error = true
        }
      )
    }

  }

}


