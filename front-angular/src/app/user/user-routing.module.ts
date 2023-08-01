import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBuscaComponent } from './user-busca.component';
import { ListUsuarioComponent } from './list-usuario.component';
import { FormUserComponent } from './form-user.component';
import { UserControlComponent } from './user.control.component';
import  *  as bread from './breadcrumb.menuitem';
// import { ResolverBreadcrumbMenuItemService } from './resolver.breadcrumb.menu-item.service';

const usersRoutes: Routes = [
  { path: bread.USER_MENU.path, component:  UserControlComponent,
    children:[
      {path:bread.USER_MENU_BUSCA.path,component:UserBuscaComponent },
      {path:bread.USER_MENU_LISTAR.path,component:ListUsuarioComponent},
      {path:'edit/:id',component:FormUserComponent},
      {path:'novo',component:FormUserComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }