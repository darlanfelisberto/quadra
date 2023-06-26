import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBuscaComponent } from './user-busca.component';
import { ListUsuarioComponent } from './list-usuario.component';
import { FormUserComponent } from './form-user.component';
import { UserControlComponent } from './user.control.component';

const routes: Routes = [
  
  { path: '', component:  UserControlComponent,
    children:[
      {path:'buscar',component:UserBuscaComponent},
      {path:'listar',component:ListUsuarioComponent},
      {path:'edit/:id',component:FormUserComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }