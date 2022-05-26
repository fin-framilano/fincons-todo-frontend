import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignContainerComponent } from './components/sign-container/sign-container.component';
import { SigninContainerComponent } from './components/signin-container/signin-container.component';
import { SignupContainerComponent } from './components/signup-container/signup-container.component';



const routes = [
  {
    path: '', component: SignContainerComponent,
    children: [
      {
        path: 'in',
        component: SigninContainerComponent
      },
      {
        path: 'up',
        component: SignupContainerComponent
      }
    ]
  }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SignRoutingModule { }
