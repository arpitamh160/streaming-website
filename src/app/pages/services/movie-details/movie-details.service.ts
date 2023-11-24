import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Genre {
  id: number;
  name: string;
}

export interface MovieContent {
  id: number;
  poster_path: string;
  release_date: string;
  media_type: string;
  title: string;
  runtime: number;
  tagline: string;
  overview: string;
  vote_average: number;
  original_language: string
  status: string;
  genres: Genre[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  private apiKey = '1adbdaa843dafd0a28d6013982558cd7';

  constructor(private http: HttpClient) { }

  getMovieDetails(movieId: number): Observable<MovieContent> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<MovieContent>(url);
  }

}



// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// export interface Genre {
//   id: number;
//   name: string;
// }

// export interface MediaContent {
//   id: number;
//   poster_path: string;
//   release_date?: string;
//   first_air_date?: string;
//   media_type: string;
//   title?: string;
//   name?: string;
//   overview: string;
//   vote_average: number;
//   original_language: string;
//   status: string;
//   genres: Genre[];
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class MediaDetailsService {
//   private apiKey = '1adbdaa843dafd0a28d6013982558cd7';
//   // private baseUrl = 'https://api.themoviedb.org/3';

//   constructor(private http: HttpClient) { }

//   getMediaDetails(mediaId: number, mediaType: 'movie' | 'tv'): Observable<MediaContent> {
//     const url =
//       mediaType === 'movie'
//         ? `https://api.themoviedb.org/3/movie/${mediaId}?api_key=${this.apiKey}`
//         : `https://api.themoviedb.org/3/tv/${mediaId}?api_key=${this.apiKey}`;

//     return this.http.get<MediaContent>(url);
//   }
// }