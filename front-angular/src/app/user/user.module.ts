import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { PickListModule } from 'primeng/picklist';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { UserBuscaComponent } from './user-busca/user-busca.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    FormUserComponent,
    UserBuscaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    PickListModule,
    PasswordModule,
    ToastModule,
    RadioButtonModule,
    InputMaskModule,
    CalendarModule
  ],
  exports:[
    FormUserComponent,
    UserBuscaComponent
  ]
})
export class UserModule { }
