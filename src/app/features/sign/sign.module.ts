import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignRoutingModule } from './sign-routing.module';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignContainerComponent } from './components/sign-container/sign-container.component';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { SignupContainerComponent } from './components/signup-container/signup-container.component';
import { UserService } from 'src/app/core/services/user.service';
import { SigninContainerComponent } from './components/signin-container/signin-container.component';



@NgModule({
  declarations: [
    SigninFormComponent,
    SignupFormComponent,
    SignContainerComponent,
    SignupContainerComponent, 
    SigninContainerComponent
  ],
  imports: [
    CommonModule, SignRoutingModule, NavbarModule, FormsModule
  ],providers: [
    UserService
  ]
})
export class SignModule { }
