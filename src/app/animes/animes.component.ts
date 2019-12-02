import { Component, OnInit } from '@angular/core';
import { Anime } from '../shared/anime';
import { AnimesService } from './animes.service';

@Component({
  selector: 'animes-selector',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
 
  public animes: Anime[];

  constructor(private animesService: AnimesService) {

  }

  ngOnInit(): void {
      this.animesService.getAnimes()
     .then((animes: Anime[]) => 
      this.animes = animes);
  }
}