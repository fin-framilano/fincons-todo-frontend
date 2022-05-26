import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUser } from 'src/app/shared/models/auth-user-model';

@Component({
  selector: 'fin-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  insertedMail: string = ""
  insertedPassword: string = ""


  /**
   * Variabile collegata al padre, qui il papà ci avverte se dobbiamo mostrare o meno 
   * il messaggio di errore delle credenziali sbagliate
  */
  @Input()
  incorrectForm: boolean = false

  /**
   * Evento di inviare al padre container, contiene i dati ricevuti dal form
   * in una struttura AuthUser (un'interfaccia creata da noi)
   */
  @Output()
  signinEvent: EventEmitter<AuthUser> = new EventEmitter<AuthUser>()
  
  constructor() { }

  ngOnInit(): void {
  }

  completeSigninForm(signinForm: NgForm) {
    const auth_user: AuthUser = {
      "mail": signinForm.value.campoEmail,
      "password": signinForm.value.campoPassword
    }
    this.signinEvent.emit(auth_user)
  }

}
