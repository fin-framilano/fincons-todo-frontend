import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-sign-container',
  templateUrl: './sign-container.component.html',
  styleUrls: ['./sign-container.component.css']
})
export class SignContainerComponent implements OnInit {


  listTabs: string[] = ["Accedi", "Registrati"]
  showLogout: boolean = false

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigateByUrl("sign/in")
  }

  navbarClickHandler(menu_choice: number) {
    switch (menu_choice) {
      case 0:
        this.router.navigateByUrl("sign/in")
        break
      case 1:
        this.router.navigateByUrl("sign/up")
        break
    }
  }

}
