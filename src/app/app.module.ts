import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DcComponent } from './dc/dc.component';
import { MarvComponent } from './marv/marv.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,DcComponent, MarvComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
