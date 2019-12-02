import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    public getUserOn(): Promise<User> {
        return this.http.get<User>('http://localhost:3000/users/on/auth').toPromise();
    }

    public login(user: User): Promise<User> {
        return this.http.post<User>('http://localhost:3000/users/login', user).toPromise();
    }

    public register(user: User): Promise<User> {
        return this.http.post<User>('http://localhost:3000/users/register', user).toPromise();
    }
}