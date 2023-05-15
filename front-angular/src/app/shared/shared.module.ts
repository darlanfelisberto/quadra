import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageValidationComponent} from "../shared/message-validation/message-validation.component";


@NgModule({
  declarations: [
    MessageValidationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MessageValidationComponent
  ]
})
export class SharedModule { }
