import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { MainComponentPokeComponent } from './pages/main-component-poke/main-component-poke.component';



@NgModule({
  declarations: [
    SearchComponent,
    MainComponentPokeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PokeModule { }
