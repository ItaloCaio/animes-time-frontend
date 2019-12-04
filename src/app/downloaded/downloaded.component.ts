import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes/animes.service';
import { LoginService } from '../login/login.service';
import { EpisodeManager } from '../shared/episode.manager';
import { User } from '../shared/user';

@Component({
    selector: 'downloaded-selector',
    templateUrl: './downloaded.component.html',
    styleUrls: ['./downloaded.component.css']
})
export class DownloadedComponent implements OnInit {

    episodes: EpisodeManager[];
    user: User;
    constructor(private animesService: AnimesService, private loginService: LoginService) {

    }

    ngOnInit(): void {


        this.loginService.getUserOn()
            .then((user: User) => {
                this.user = user;
                this.animesService.getEpisodesDownloaded(user._id)
                    .then((episodes: EpisodeManager[]) =>
                        this.episodes = episodes
                    );
            }
            );
    }

    deleteEpisode(episode: EpisodeManager){
        this.animesService.deleteEpisodeDownloaded(this.user._id, episode);
    }

}