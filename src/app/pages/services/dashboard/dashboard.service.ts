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
export interface TvContent {
  id: number;
  poster_path: string;
  media_type: string;
  name: string;
  first_air_date: string;

}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  private apiKey = '1adbdaa843dafd0a28d6013982558cd7';

  getTrendingMovies(): Observable<MovieContent[]> {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get<MovieContent[]>(url);
  }

  getPopularMovies(): Observable<MovieContent[]> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<MovieContent[]>(url);
  }
  getTrendingTvSeries(): Observable<TvContent[]> {
    const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${this.apiKey}`;
    return this.http.get<TvContent[]>(url);
  }
  getPopularTvSeries(): Observable<TvContent[]> {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`;
    return this.http.get<TvContent[]>(url);
  }

}




