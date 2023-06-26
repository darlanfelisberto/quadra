import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { PickListModule } from 'primeng/picklist';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    PickListModule,
    PasswordModule,
    RadioButtonModule,
    InputMaskModule,
    CalendarModule,
    PanelModule,
    ToastModule,
    TableModule,
  ]
})
export class PrimeNGAppUse { }
