// bookmark.component.ts
import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { BookmarkService, MovieContent, TvContent } from 'src/app/pages/services/bookmark/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
  host: {
    '[style.width]': '"100%"',
  },
})
export class BookmarkComponent implements OnInit {
  bookmarkedMovie$!: Observable<MovieContent[]>;
  bookmarkedTv$!: Observable<TvContent[]>;

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarkedMovie$ = this.bookmarkService.movieSubject$;
    this.bookmarkedTv$ = this.bookmarkService.tvSubject$;
  }

  ngOnInit(): void {
    this.bookmarkedMovie$ = this.bookmarkService.movieSubject$;
    this.bookmarkedTv$ = this.bookmarkService.tvSubject$;
  }

  isBookmarkedMovie(movieId: number): boolean {
    const bookmarkedMovies = this.bookmarkService.getBookmarksMovie();
    return bookmarkedMovies.some((movie) => movie.id === movieId);
  }

  isBookmarkedTv(tvId: number): boolean {
    const bookmarkedTv = this.bookmarkService.getBookmarksTv();
    return bookmarkedTv.some((tv) => tv.id === tvId);
  }

  toggleBookmarkMovie(movie: MovieContent): void {
    this.bookmarkService.toggleBookmarkMovie(movie);
  }

  toggleBookmarkTv(tv: TvContent): void {
    this.bookmarkService.toggleBookmarkTv(tv);
  }

  getYearFromDate(fullDate: string): string {
    const date = new Date(fullDate);
    const year = date.getFullYear();
    return year.toString();
  }
}
