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
import { MessageService } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';


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
    BreadcrumbModule
  ],
  providers:[MessageService]
})
export class PrimeNGAppUse { }
