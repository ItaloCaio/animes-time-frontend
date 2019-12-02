import { Routes } from '@angular/router';
import { AnimesComponent } from './animes/animes.component';
import { MyAnimeComponent } from './my.anime/my.anime.component';
import { EpisodeComponent } from './episode/episode.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListEpisodesComponent } from './list.episodes/list.episodes.component';

export const ROUTES: Routes =  [
    { path: '', component: AnimesComponent },
    {path: 'meus-animes', component: MyAnimeComponent},
    {path: 'meus-animes/:id', component: EpisodeComponent},
    {path: 'cadastro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'animes/:id/episodios/:id', component: EpisodeComponent},
    {path: 'animes/:id/episodios', component: ListEpisodesComponent}
];