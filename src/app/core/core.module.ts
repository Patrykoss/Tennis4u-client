import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {}
