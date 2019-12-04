import { Component, OnInit } from '@angular/core';
import { Anime } from '../shared/anime';
import { AnimesService } from './animes.service';
import { LoginService } from '../login/login.service';
import { User } from '../shared/user';
import { MyAnimes } from '../shared/myAnimes';

@Component({
  selector: 'animes-selector',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
 
  public animes: Anime[];
  user: User;

  constructor(private animesService: AnimesService, private loginService: LoginService) {

  }

  ngOnInit(): void {
      this.animesService.getAnimes()
     .then((animes: Anime[]) => 
      this.animes = animes);

      this.loginService.getUserOn()
    .then((user: User) => {
      this.user = user;
    }
    );  
  }

  add(anime: Anime){
    
    this.animesService.addMyAnime(this.user._id, anime)
    .then((myAnime: MyAnimes) => {
      console.log('meu anime: ' + myAnime.anime);
    }
    );  

  }
}