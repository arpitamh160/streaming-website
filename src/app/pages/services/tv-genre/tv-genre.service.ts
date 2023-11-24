import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TvGenre {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class TvGenreService {

  constructor(private http: HttpClient) { }
  private apiKey = '1adbdaa843dafd0a28d6013982558cd7';

  fetchTvGenres(): Observable<TvGenre[]> {
    const genresUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}`;
    return this.http.get<TvGenre[]>(genresUrl);
  }
}
