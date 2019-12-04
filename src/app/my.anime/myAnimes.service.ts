import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { MyAnimes } from '../shared/myAnimes';
import { Anime } from '../shared/anime';

@Injectable()
export class MyAnimeService {
    constructor(private http: HttpClient) { }

    public getMyAnimesFromUserId(userId: string): Promise<MyAnimes[]> {
        const url = 'http://localhost:3000/' + userId +'/my-animes';
        return this.http.get<MyAnimes[]>(url).toPromise();
    }
    public addAnime(id:string, anime: Anime): Promise<User> {
        return this.http.post<User>('http://localhost:3000/' + id +'/my-animes', anime).toPromise();
    }
    public register(user: User): Promise<User> {
        return this.http.post<User>('http://localhost:3000/users/register', user).toPromise();
    }

    public deleteMyAnime(id: string, myAnime: MyAnimes): Promise<MyAnimes> {

        const url = 'http://localhost:3000/' + id +'/my-animes/'  + myAnime._id;
        return this.http.delete<MyAnimes>(url).toPromise();
    }
}