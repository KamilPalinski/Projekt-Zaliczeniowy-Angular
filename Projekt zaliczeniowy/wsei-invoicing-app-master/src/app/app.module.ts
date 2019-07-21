import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicingModule } from './invoicing/invoicing.module';
import { HeroModule } from './hero/hero.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ClientsModule } from './clients/clients/clients.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoicingModule,
    ClientsModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
