import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TopComponent } from './top/top.component';
import { AnimesComponent } from './animes/animes.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, TopComponent, AnimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, TopComponent, AnimesComponent]
})
export class AppModule { }
