import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

import { FormUserComponent } from './form-user.component';
import {SharedModule} from "../shared/shared.module";
import { PrimeNGAppUse } from '../prime-ng-app-use.module';
import { UserBuscaComponent } from './user-busca.component';
import { ListUsuarioComponent } from './list-usuario.component';
import { UserControlComponent } from './user.control.component';
import { UserRoutingModule } from './user-routing.module';
import { BreadcrumbComponent } from '../shared/breadcrumb.component';



@NgModule({
  declarations: [
    FormUserComponent,
    UserBuscaComponent,
    ListUsuarioComponent,
    UserControlComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGAppUse,
    RouterModule,
    UserRoutingModule
  ],
  exports:[
  ],
})
export class UserModule { }
