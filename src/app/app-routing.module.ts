import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'sign', pathMatch: 'full'
  },

  {
    path: 'sign', loadChildren: () => import('./features/sign/sign.module')
      .then(m => m.SignModule)
  }

  ,
  {
    path: 'home', loadChildren: () => import('./features/home/home.module')
      .then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
