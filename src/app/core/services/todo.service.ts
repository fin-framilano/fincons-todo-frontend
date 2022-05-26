import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  public getTodosById(user_id: number): Observable<Todo[]> {
    const url: string = environment.baseUrl + "/todos/user/" + user_id
    return this.http.get<Todo[]>(url)
  }

  public createTodo(todo: Todo): Observable<number> {
    const url: string = environment.baseUrl + "/todos"
    return this.http.post<number>(url, todo)
  }

  public deleteTodo(id: number): Observable<any> {
    const url: string = environment.baseUrl + "/todos/" + id
    return this.http.delete<number>(url)
  }
}
