import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { OptionEnum } from 'src/app/shared/enums/option-enum';
import { TodoEnum } from 'src/app/shared/enums/todo-enum';
import { Option } from 'src/app/shared/models/option-model';
import { Todo } from 'src/app/shared/models/todo-model';
import { CrudUtils } from 'src/app/shared/utils/crud.utils';

/**
 * Componente che istanzia la tabella con tutti i todo salvati per l'utente loggato
 */

@Component({
  selector: 'fin-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  //Lista dei promemoria caricati dal back-end
  listOfTodos: Todo[] = []

  //Decido se mostrare o meno la tabella dei todo
  //In base al numero di elementi recuperati
  atleastOne: boolean = false

  //Variabile di loading per il caricamento di una piccola gif
  loading: boolean = true

  //Id dell'utente attualmente loggato
  user_id: number = 0

  /**
   * Constructor injection dei servizi
   * @param todoService 
   * @param route 
   */
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  /**
   * 1. Con il primo subscribe recupero l'id utente dall'URL attuale
   * 2. Caricamento della lista dei todo in base all'id utente e settaggio delle variabili per mostrare la lista
   */
  ngOnInit(): void {
    this.loading = true
    this.route.parent?.params.subscribe(
      result => {
        this.user_id = result['id']
        this.todoService.getTodosById(this.user_id).subscribe(
          items => {
            if (!result || items.length == 0 ) {
              this.atleastOne = false
              this.loading = false
            }
            else {
              this.listOfTodos = items.map(t => {
                  if (t.status === "TODO") t.status = TodoEnum.TODO
                  if (t.status === "IN_PROGRESS") t.status = TodoEnum.IN_PROGRESS
                  if (t.status === "DONE") t.status = TodoEnum.DONE
                  return t
                }
              )  
              //Metodo per il sorting della tabella in base alla "data di scadenza"
              this.listOfTodos = CrudUtils.sortArrayByField(this.listOfTodos, "dueDate")
              
              //Mostro la lista dopo aver caricato i risultati
              this.atleastOne = true
              this.loading = false
            }
          } , error => console.log(error)
        )
      }
    )
  }

  //Funzione di risposta all'evento di click sulle opzioni disponibili per ogni todo
  optionHandler(selected_option: Option) {
    switch (selected_option.option) {
      case OptionEnum.ELIMINA:
        //Rimozione in loco e nel backend del todo selezionato
        this.todoService.deleteTodo(selected_option.item_id).subscribe(
          result => {
            this.listOfTodos = CrudUtils.removeFromArrayById(this.listOfTodos, selected_option.item_id)
          }, error => console.log(error)
        )
        break
    }
  }

}
