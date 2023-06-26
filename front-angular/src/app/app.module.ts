import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TemplateModule} from "./template/template.module";
import {UserModule} from "./user/user.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UsModule } from './us/us.module';
import { PrimeNGAppUse } from './prime-ng-app-use.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    UserModule,
    UsModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    NoopAnimationsModule,
    PrimeNGAppUse
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
