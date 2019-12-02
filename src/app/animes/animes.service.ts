import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../shared/anime';
import { MyAnimes } from '../shared/myAnimes';

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

}