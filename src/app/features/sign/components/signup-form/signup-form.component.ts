import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUser } from 'src/app/shared/models/auth-user-model';

@Component({
  selector: 'fin-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {


  @Input()
  incorrectForm: boolean = false

  insertedMail: string = ""
  insertedPassword: string = ""
  insertedPasswordAgain: string = ""

  @Output()
  signupEvent: EventEmitter<AuthUser> = new EventEmitter<AuthUser>()

  constructor() { }

  ngOnInit(): void {
  }

  completeSignupForm(signupForm: NgForm) {
    const auth_user: AuthUser = {
      "mail": signupForm.value.campoEmail,
      "password": signupForm.value.campoPassword
    }

    this.signupEvent.emit(auth_user)
  }

}
