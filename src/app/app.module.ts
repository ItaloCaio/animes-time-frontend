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
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AnimesService } from './animes/animes.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { MyAnimeService } from './my.anime/myAnimes.service';
import { ListEpisodesComponent } from './list.episodes/list.episodes.component';
import { DownloadedComponent } from './downloaded/downloaded.component';
import { WatchedComponent } from './watchs/watchs.component';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, TopComponent, AnimesComponent, RegisterComponent, 
    LoginComponent, MyAnimeComponent, EpisodeComponent, ListEpisodesComponent, DownloadedComponent, 
    WatchedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [AnimesService, LoginService, MyAnimeService],
  bootstrap: [AppComponent, MenuComponent, TopComponent, AnimesComponent, RegisterComponent, 
    LoginComponent, MyAnimeComponent, EpisodeComponent, ListEpisodesComponent]
})
export class AppModule {}
