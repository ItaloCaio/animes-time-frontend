import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TopComponent } from './top/top.component';
import { AnimesComponent } from './animes/animes.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyAnimeComponent } from './my.anime/my.anime.component';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, TopComponent, AnimesComponent, RegisterComponent, 
    LoginComponent, MyAnimeComponent, EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, TopComponent, AnimesComponent, RegisterComponent, 
    LoginComponent, MyAnimeComponent, EpisodeComponent]
})
export class AppModule { }
