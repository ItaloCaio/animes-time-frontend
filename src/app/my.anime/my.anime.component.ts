import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { MyAnimeService } from './myAnimes.service';
import { User } from '../shared/user';
import { MyAnimes } from '../shared/myAnimes';

@Component({
  selector: 'my-anime-selector',
  templateUrl: './my.anime.component.html',
  styleUrls: ['./my.anime.component.css']
})
export class MyAnimeComponent implements OnInit {

  user: User;
  public myAnimes: MyAnimes[];

  constructor(private loginService: LoginService, private myAnimeService: MyAnimeService) {

  }

  ngOnInit(): void {

    this.loginService.getUserOn()
      .then((user: User) => {
        this.user = user;
        
        this.myAnimeService.getMyAnimesFromUserId(user._id)
        .then((myAnime: MyAnimes[]) =>
        this.myAnimes = myAnime);
      }
      ); 
    console.log('My anime ID:' + this.user);
        
  }


}