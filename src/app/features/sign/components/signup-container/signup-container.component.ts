import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthUser } from 'src/app/shared/models/auth-user-model';
import { SecurityUtils } from 'src/app/utils/security.utils';

@Component({
  selector: 'fin-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.css']
})
export class SignupContainerComponent implements OnInit {


  incorrectFormValue: boolean = false

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signupHandler(auth_user: AuthUser) {
    this.userService.findByMail(auth_user.mail).subscribe(
      result => {
        console.log(result)
        if (result) {
          this.incorrectFormValue = true
        } else {
          auth_user.password = SecurityUtils.computeMd5(auth_user.password)
          this.userService.createUser(auth_user).subscribe(
            result => {
              console.log(result)
              this.router.navigateByUrl("sign/in")
            }, error => console.log(error)
          )
        }
      }
    )
  }

}
