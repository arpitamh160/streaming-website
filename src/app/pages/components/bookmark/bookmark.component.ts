import { Component, Input, OnInit } from '@angular/core';
import { MoviesService, Movie } from 'src/app/shared/services/movies-service/movies.service';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  bookmarkedMovies: Movie[] = [];
  
  constructor(private movieService: MoviesService) {}
  ngOnInit() {
    this.bookmarkedMovies = this.movieService.getBookmarkedMovies();
  }

}
