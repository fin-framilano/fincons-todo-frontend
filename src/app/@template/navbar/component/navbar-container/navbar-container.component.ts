import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'fin-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit {


  @Input()
  listTabs: string[] = []

  @Input()
  showLogout: boolean = false

  @Output()
  menuSelectionEvent: EventEmitter<number> = new EventEmitter<number>()

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  navbarSelectionHandler(indice_menu: number) {
    this.menuSelectionEvent.emit(indice_menu)
  }

  goToSignIn() {
    this.router.navigateByUrl("sign/in")
  }
}

