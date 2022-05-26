import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarContainerComponent } from "./component/navbar-container/navbar-container.component";

@NgModule({
  declarations: [
    NavbarContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarContainerComponent
  ]
})
export class NavbarModule {

  constructor() {
    console.log('NavbarModule loading..');
  }
}
