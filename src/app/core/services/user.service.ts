import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from 'src/app/shared/models/auth-user-model';
import { User } from 'src/app/shared/models/user-model';




@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public findByMail(mail: string): Observable<User> {
    const url: string = environment.baseUrl + "/users/" + mail
    return this.http.get<User>(url)
  }

  public createUser(auth_user: AuthUser): Observable<number> {
    const url: string = environment.baseUrl + "/users"
    return this.http.post<number>(url, auth_user)
  }

  public login(authUser: AuthUser): Observable<User> {
    const url: string = environment.baseUrl + "/security"
    return this.http.post<User>(url, authUser)
  }

}
