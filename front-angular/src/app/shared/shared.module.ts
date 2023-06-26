import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactMessageValidationComponent} from "./message-validation/react-message-validation.component";
import {TemplateMessageValidationComponent} from "./message-validation/template-message-validation.component";


@NgModule({
  declarations: [
    ReactMessageValidationComponent,
    TemplateMessageValidationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReactMessageValidationComponent,
    TemplateMessageValidationComponent
  ]
})
export class SharedModule { }
