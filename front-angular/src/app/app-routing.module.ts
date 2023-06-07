import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './user/form-user/form-user.component';
import { UserBuscaComponent } from './user/user-busca/user-busca.component';

const routes: Routes = [
  { path: 'usuarios/busca', component: UserBuscaComponent },
  { path: 'usuarios/form', component: FormUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
