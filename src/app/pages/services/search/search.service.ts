import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface MediaContent {
  id: number;
  poster_path: string;
  release_date: string;
  media_type: string;
  title: string;
  name: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  original_language: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiKey = '1adbdaa843dafd0a28d6013982558cd7';
  private searchResultsSubject = new BehaviorSubject<MediaContent[]>([]);

  constructor(private http: HttpClient) { }

  searchMedia(query: string): Observable<MediaContent[]> {
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${this.apiKey}`;
    this.http.get<MediaContent[]>(url).subscribe((results) => this.searchResultsSubject.next(results));
    return this.searchResultsSubject.asObservable();
  }
}