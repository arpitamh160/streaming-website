import { Component, OnInit, Input} from '@angular/core';
import { MoviesService,Movie} from '../../services/movies-service/movies.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() movieList: Movie[]=[];
  
  currentMovieIndex = 0;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies) => {
      this.movieList = movies;
    });
  }

  nextMovie() {
    if (this.currentMovieIndex < this.movieList.length - 1) {
      this.currentMovieIndex++;
    }
  }

  previousMovie() {
    if (this.currentMovieIndex > 0) {
      this.currentMovieIndex--;
    }
  }

  toggleBookmark(movie: any) {
    if (this.isBookmarked(movie)) {
      this.movieService.removeBookmark(movie);
    } else {
      this.movieService.bookmarkMovie(movie);
    }
  }

  isBookmarked(movie: any): boolean {
    return this.movieService.getBookmarkedMovies().includes(movie);
  }

  
  
}
