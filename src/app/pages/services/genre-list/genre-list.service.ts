import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MovieContent {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  media_type: string;
}
export interface TvSeriesContent {
  id: number;
  poster_path: string;
  name: string;
  first_air_date: string;
  media_type: string;

}


@Injectable({
  providedIn: 'root'
})
export class GenreListService {

  constructor(private http: HttpClient) { }
  private apiKey = '1adbdaa843dafd0a28d6013982558cd7';


  getMovieByGenre(movieGenreId: number): Observable<MovieContent[]> {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${movieGenreId}&api_key=${this.apiKey}`;
    return this.http.get<MovieContent[]>(url);
  }

  getTvSeriesByGenre(tvGenreId: number): Observable<TvSeriesContent[]> {
    const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${tvGenreId}&api_key=${this.apiKey}`;
    return this.http.get<TvSeriesContent[]>(url);
  }

}
