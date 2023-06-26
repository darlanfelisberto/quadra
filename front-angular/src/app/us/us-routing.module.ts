import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from '../user/list-usuario.component';
import { FormUserComponent } from '../user/form-user.component';
import { UsControlComponent } from './us-control.component';
import { UsBuscaComponent } from './us-busca.component';

const routes: Routes = [
    { path: '', component: UsControlComponent },
  { path: 'buscar', component: UsBuscaComponent },
  { path: 'listar', component: ListUsuarioComponent},
  { path: 'edit/:id', component: FormUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsRoutingModule { }