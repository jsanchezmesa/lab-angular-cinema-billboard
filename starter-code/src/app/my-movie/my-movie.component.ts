import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponent implements OnInit {

  movie: Object;
  movieId: number;

  constructor(private movies:MoviesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => this.movieId = Number(params['id']));
    this.viewMovie();
  }

  viewMovie() {
    this.movie = this.movies.getMovie(this.movieId);
  }

}
