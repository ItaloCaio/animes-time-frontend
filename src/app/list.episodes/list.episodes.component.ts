import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes/animes.service';
import { Episode } from '../shared/episode';
import { LoginService } from '../login/login.service';
import { User } from '../shared/user';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'list-episodes-selector',
    templateUrl: './list.episodes.component.html',
    styleUrls: ['./list.episodes.component.css']
})
export class ListEpisodesComponent implements OnInit {

    episodes: Episode[];
    user: User;
    constructor(private animesService: AnimesService, private loginService: LoginService, private router: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.animesService.getEpisodes(this.router.snapshot.params['id'])
            .then((episodes: Episode[]) =>
                this.episodes = episodes
            );

        this.loginService.getUserOn()
            .then((user: User) => {
                this.user = user;
            }
            );

           
    }

    isWatched(episode: Episode) {

        this.animesService.addEpisodioWatched(this.user._id, episode);
    }

    isDownloaded(episode: Episode) {

        this.animesService.addEpisodeDownloaded(this.user._id, episode);
    }

}