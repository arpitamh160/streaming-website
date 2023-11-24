import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieGenreService, MovieGenre } from '../../services/movie-genre/movie-genre.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-moviegenre',
  templateUrl: './moviegenre.component.html',
  styleUrls: ['./moviegenre.component.scss'],
  host: {
    '[style.width]': '"100%"',
  },
})
export class MoviegenreComponent implements OnInit, OnDestroy {
  moviegenres: MovieGenre[] = [];
  category: string = '';
  moviegenreColors: string[] = ["column-even-movie", "column-odd"];
  private subscription: Subscription = new Subscription();

  constructor(private movieGenreService: MovieGenreService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.movieGenreService.fetchMovieGenres().subscribe({
      next: (data: any) => {
        this.moviegenres = data.genres;
      },
      error: (error: any) => {
        console.error('Error fetching movie genres:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
