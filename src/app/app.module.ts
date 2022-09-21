import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SelectApiComponent } from './select-api/select-api.component';
import { PaisModule } from './restcountries/pais.module';

@NgModule({
  declarations: [
    AppComponent,
    SelectApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PaisModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
