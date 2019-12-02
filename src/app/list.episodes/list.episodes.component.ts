import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes/animes.service';
import { Episode } from '../shared/episode';

@Component({
    selector: 'list-episodes-selector',
    templateUrl: './list.episodes.component.html',
    styleUrls: ['./list.episodes.component.css']
})
export class ListEpisodesComponent implements OnInit {

    episodes: Episode[];

    constructor(private animesService: AnimesService) {

    }

    ngOnInit(): void {
        this.animesService.getEpisodes()
            .then((episodes: Episode[]) =>
                this.episodes = episodes
            );
    }

    isWatched(episode: Episode) {
        episode.isWatched = true;
        this.animesService.updateEpisode(episode);
    }

    isDownloaded(episode: Episode) {
        episode.isDownloaded = true;
        this.animesService.updateEpisode(episode);
    }

}