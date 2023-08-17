import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactMessageValidationComponent} from "./message-validation/react-message-validation.component";
import {TemplateMessageValidationComponent} from "./message-validation/template-message-validation.component";
import {BreadcrumbComponent} from '../components/breadcrumb/breadcrumb.component';
import {PrimeNGAppUse} from '../prime-ng-app-use.module';


@NgModule({
  declarations: [
    ReactMessageValidationComponent,
    TemplateMessageValidationComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGAppUse
  ],
  exports:[
    ReactMessageValidationComponent,
    TemplateMessageValidationComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
