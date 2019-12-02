import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../shared/anime';
import { MyAnimes } from '../shared/myAnimes';
import { Episode } from '../shared/episode';
import {Comments} from '../shared/comments.interface';

@Injectable()
export class AnimesService {
    myAnime: MyAnimes = new MyAnimes();
    constructor(private http: HttpClient) { }

    public getAnimes(): Promise<Anime[]> {
        return this.http.get<Anime[]>('http://localhost:3000/animes').toPromise();
    }
    
    public addMyAnime(id: string, anime: Anime): Promise<MyAnimes> {
        this.myAnime.userId = id;
        this.myAnime.anime = anime;
        const url = 'http://localhost:3000/' + id +'/my-animes';
        return this.http.post<MyAnimes>(url, this.myAnime).toPromise();
    }

    public getEpisodes(): Promise<Episode[]>{
        const url = 'http://localhost:3000/animes/5db8503cc91a992484561eb4/episodes';
        return this.http.get<Episode[]>(url).toPromise();
    }

    public updateEpisode(episode: Episode): Promise<Episode>{
        const url = 'http://localhost:3000/animes/5db8503cc91a992484561eb4/episodes/5dba118e13eb8a386cd2a8e4';
        return this.http.put<Episode>(url, episode).toPromise();
    }

    public getComments():Promise<Comments[]>{
        const url = 'http://localhost:3000/animes/5db8503cc91a992484561eb4/episodes';
        return this.http.get<Comments[]>(url).toPromise();
    }

    public addComment(comment: Comments): Promise<Comments>{
        const url = 'http://localhost:3000/animes/5db8503cc91a992484561eb4/episodes/5dba118e13eb8a386cd2a8e4';
        return this.http.post<Comments>(url, comment).toPromise();
    }

    public getEpisodeById(): Promise<Episode> {
        const url = 'http://localhost:3000/animes/5db8503cc91a992484561eb4/episodes/5dba118e13eb8a386cd2a8e4';
        return this.http.get<Episode>(url).toPromise();
    }

}