import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [
    FormUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    InputTextModule,
    ButtonModule
  ],
  exports:[
    FormUserComponent
  ]
})
export class UserModule { }
