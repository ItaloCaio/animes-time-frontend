import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { MyAnimes } from '../shared/myAnimes';
import { Anime } from '../shared/anime';
import { Episode } from '../shared/episode';

@Injectable()
export class WatchService {
    constructor(private http: HttpClient) { }

    public getWatchedFromUserId(userId: string): Promise<MyAnimes[]> {
        const url = 'http://localhost:3000/' + userId +'/watched';
        return this.http.get<MyAnimes[]>(url).toPromise();
    }
    public addDownloaded(id:string, episode: Episode): Promise<User> {
        return this.http.post<User>('http://localhost:3000/' + id +'/watched', episode).toPromise();
    }
}