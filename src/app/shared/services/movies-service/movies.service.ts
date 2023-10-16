import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 export interface Movie {
  id: number;
  thumbnail: string;
  saved: boolean;
  year: number;
  category: string;
  popular: boolean;
  movieName: string;
  genre:string;
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 movieUrl = '/assets/data/movies.json';
 bookmarkedMovies: Movie[] = [];

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }
  getBookmarkedMovies(): Movie[] {
    return this.bookmarkedMovies;
  }

  bookmarkMovie(movie: Movie) {
    if (!this.bookmarkedMovies.includes(movie)) {
      this.bookmarkedMovies.push(movie);
    }
  }

  removeBookmark(movie: Movie) {
    const index = this.bookmarkedMovies.indexOf(movie);
    if (index !== -1) {
      this.bookmarkedMovies.splice(index, 1);
    }
  }
}