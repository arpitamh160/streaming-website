import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
export class BookmarkService {
  private movieSubject = new BehaviorSubject<MovieContent[]>([]);
  private tvSubject = new BehaviorSubject<TvContent[]>([]);

  movieSubject$: Observable<MovieContent[]> = this.movieSubject.asObservable();
  tvSubject$: Observable<TvContent[]> = this.tvSubject.asObservable();

  constructor() {
    this.movieSubject.next(this.getBookmarksMovie());
    this.tvSubject.next(this.getBookmarksTv());
  }

  getBookmarksMovie(): MovieContent[] {
    const bookmarksMovie = JSON.parse(localStorage.getItem("bookmarksMovie") || "[]");
    return bookmarksMovie;
  }

  getBookmarksTv(): TvContent[] {
    const bookmarksTv = JSON.parse(localStorage.getItem("bookmarksTv") || "[]");
    return bookmarksTv;
  }

  private updateLocalStorage(movieBookmarks: MovieContent[], tvBookmarks: TvContent[]): void {
    localStorage.setItem("bookmarksMovie", JSON.stringify(movieBookmarks));
    localStorage.setItem("bookmarksTv", JSON.stringify(tvBookmarks));
  }

  toggleBookmarkMovie(movie: MovieContent): void {
    const bookmarksMovie = this.getBookmarksMovie();
    const isBookmarked = bookmarksMovie.some((b: any) => b.id === movie.id);

    if (isBookmarked) {
      const updatedBookmarksMovie = bookmarksMovie.filter((b: any) => b.id !== movie.id);
      this.updateLocalStorage(updatedBookmarksMovie, this.getBookmarksTv());
      this.movieSubject.next(updatedBookmarksMovie);
    } else {
      bookmarksMovie.push(movie);
      this.updateLocalStorage(bookmarksMovie, this.getBookmarksTv());
      this.movieSubject.next(bookmarksMovie);
    }
  }

  toggleBookmarkTv(tv: TvContent): void {
    const bookmarksTv = this.getBookmarksTv();
    const isBookmarked = bookmarksTv.some((b: any) => b.id === tv.id);

    if (isBookmarked) {
      const updatedBookmarksTv = bookmarksTv.filter((b: any) => b.id !== tv.id);
      this.updateLocalStorage(this.getBookmarksMovie(), updatedBookmarksTv);
      this.tvSubject.next(updatedBookmarksTv);
    } else {
      bookmarksTv.push(tv);
      this.updateLocalStorage(this.getBookmarksMovie(), bookmarksTv);
      this.tvSubject.next(bookmarksTv);
    }
  }
}
