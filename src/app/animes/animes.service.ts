import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../shared/anime';

@Injectable()
export class AnimesService {
    constructor(private http: HttpClient) { }

    public getAnimes(): Promise<Anime[]> {

        return this.http.get<Anime[]>('http://localhost:3000/animes').toPromise();
    }
}