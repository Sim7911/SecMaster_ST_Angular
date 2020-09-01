import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BondModule} from './bond/bond.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquityModule } from './equity/equity.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BondModule,
    BrowserAnimationsModule,
    EquityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
