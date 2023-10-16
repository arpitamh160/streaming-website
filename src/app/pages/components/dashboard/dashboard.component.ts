import { Component} from '@angular/core';
import { MoviesService, Movie } from 'src/app/shared/services/movies-service/movies.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  trendingMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  trendingTVSeries: Movie[] = [];
  popularTVSeries: Movie[] = [];

  constructor(private movieService: MoviesService) {
    this.movieService.getMovies().subscribe((movies) => {
      this.trendingMovies = movies.filter((movie) => movie.category === 'Movie');
      this.popularMovies = movies.filter((movie) => movie.category === 'Movie' && movie.popular === true);
      this.trendingTVSeries = movies.filter((movie) => movie.category === 'TV Series');
      this.popularTVSeries = movies.filter((movie) => movie.category === 'TV Series' && movie.popular === true);
      console.log(this.trendingMovies);
      console.log(this.popularMovies);
      console.log(this.trendingTVSeries);
      console.log(this.popularTVSeries);
    });
  }


}
