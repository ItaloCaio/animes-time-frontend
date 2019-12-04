import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes/animes.service';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../shared/comments.interface';

@Component({
  selector: 'episode-selector',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  comments: Comments [];

  constructor(private animesService: AnimesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.animesService.getComments(this.router.snapshot.params['id'])
      .then((comments: Comments[]) =>
        this.comments = comments
      );

  }

}