import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Genre {
  id: number;
  name: string;
}

export interface TvContent {
  id: number;
  poster_path: string;
  first_air_date: string;
  media_type: string;
  name: string;
  overview: string;
  tagline: string;
  episode_run_time: number[];
  vote_average: number;
  original_language: string;
  status: string;
  genres: Genre[];
}


@Injectable({
  providedIn: 'root'
})
export class TvDetailsService {
  private apiKey = '1adbdaa843dafd0a28d6013982558cd7';

  constructor(private http: HttpClient) { }

  getTvDetails(movieId: number): Observable<TvContent> {
    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<TvContent>(url);
  }

}
