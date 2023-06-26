import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './user/form-user.component';
import { UserBuscaComponent } from './user/user-busca.component';
import { ListUsuarioComponent } from './user/list-usuario.component';
import { UserControlComponent } from './user/user.control.component';

const routes: Routes = [
  {path:'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },

  { path: 'usuarios/busca', component: UserBuscaComponent },
  { path: 'usuarios/form', component: FormUserComponent },
  { path: 'usuarios/list/:busca', component: ListUsuarioComponent },

  { path: 'us',
    loadChildren: () => import('./us/us.module').then(m => m.UsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
