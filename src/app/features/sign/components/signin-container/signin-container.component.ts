import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthUser } from 'src/app/shared/models/auth-user-model';
import { SecurityUtils } from 'src/app/utils/security.utils';

@Component({
  selector: 'fin-signin-container',
  templateUrl: './signin-container.component.html',
  styleUrls: ['./signin-container.component.css']
})
export class SigninContainerComponent implements OnInit {

  incorrectFormValue: boolean = false

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signinHandler(auth_user: AuthUser) {
    auth_user.password = SecurityUtils.computeMd5(auth_user.password)
    this.userService.login(auth_user).subscribe(
      result => {
        if (result) {
          this.router.navigateByUrl("home/" + result.id)
        } else this.incorrectFormValue = true
      }, error => console.log(error)
    )
  }

}
