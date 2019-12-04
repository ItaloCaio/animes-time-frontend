import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../shared/anime';
import { MyAnimes } from '../shared/myAnimes';
import { Episode } from '../shared/episode';
import { Comments } from '../shared/comments.interface';
import { EpisodeManager } from '../shared/episode.manager';

@Injectable()
export class AnimesService {
    myAnime: MyAnimes = new MyAnimes();
    episodeManager: EpisodeManager;
    constructor(private http: HttpClient) { }

    public getAnimes(): Promise<Anime[]> {
        return this.http.get<Anime[]>('http://localhost:3000/animes').toPromise();
    }

    public addMyAnime(id: string, anime: Anime): Promise<MyAnimes> {
        this.myAnime.userId = id;
        this.myAnime.anime = anime;
        const url = 'http://localhost:3000/' + id + '/my-animes';
        return this.http.post<MyAnimes>(url, this.myAnime).toPromise();
    }

    public getEpisodes(id: string): Promise<Episode[]> {
        const url = 'http://localhost:3000/animes/' + id + '/episodes';
        return this.http.get<Episode[]>(url).toPromise();
    }

    public updateEpisode(episode: Episode): Promise<Episode> {
        const url = 'http://localhost:3000/animes/5db8503cc91a992484561eb4/episodes/5dba118e13eb8a386cd2a8e4';
        return this.http.put<Episode>(url, episode).toPromise();
    }

    public getComments(id: string): Promise<Comments[]> {
        const url = 'http://localhost:3000/' + id + '/comments';
        return this.http.get<Comments[]>(url).toPromise();
    }

    public addComment(id: string, comment: Comments): Promise<Comments> {
        const url = 'http://localhost:3000/' + id + '/comments';
        return this.http.post<Comments>(url, comment).toPromise();
    }

    public getEpisodeById(): Promise<Episode> {
        const url = 'http://localhost:3000/animes/5db8503cc91a992484561eb4/episodes/5dba118e13eb8a386cd2a8e4';
        return this.http.get<Episode>(url).toPromise();
    }

    public addEpisodeDownloaded(id: string, episode: Episode): Promise<EpisodeManager> {
        this.episodeManager = new EpisodeManager();

        this.episodeManager.userId = id;
        this.episodeManager.episode = episode;

        const url = 'http://localhost:3000/' + id + '/downloaded';
        return this.http.post<EpisodeManager>(url, this.episodeManager).toPromise();
    }

    public addEpisodioWatched(id: string, episode: Episode): Promise<EpisodeManager> {
        this.episodeManager = new EpisodeManager();
        this.episodeManager.userId = id;
        this.episodeManager.episode = episode;
        const url = 'http://localhost:3000/' + id + '/watched';
        return this.http.post<EpisodeManager>(url, this.episodeManager).toPromise();
    }

    public getEpisodesWatcheds(id: string): Promise<EpisodeManager[]> {

        const url = 'http://localhost:3000/' + id + '/watched';
        return this.http.get<EpisodeManager[]>(url).toPromise();
    }

    public getEpisodesDownloaded(id: string): Promise<EpisodeManager[]> {

        const url = 'http://localhost:3000/' + id + '/downloaded';
        return this.http.get<EpisodeManager[]>(url).toPromise();
    }

    public deleteEpisodeDownloaded(id: string, episode: EpisodeManager): Promise<EpisodeManager> {

        const url = 'http://localhost:3000/' + id + '/downloaded/' + episode._id;
        return this.http.delete<EpisodeManager>(url).toPromise();
    }

    public deleteEpisodeWatched(id: string, episode: EpisodeManager): Promise<EpisodeManager> {

        const url = 'http://localhost:3000/' + id + '/watched/' + episode._id;
        return this.http.delete<EpisodeManager>(url).toPromise();
    }

    
}