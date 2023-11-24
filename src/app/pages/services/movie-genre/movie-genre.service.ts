import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MovieGenre {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieGenreService {
  private apiKey = '1adbdaa843dafd0a28d6013982558cd7';
  constructor(private http: HttpClient) { }


  fetchMovieGenres(): Observable<MovieGenre[]> {
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`;
    return this.http.get<MovieGenre[]>(genresUrl);
  }
}
