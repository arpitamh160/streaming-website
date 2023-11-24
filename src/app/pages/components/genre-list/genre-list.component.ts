import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreListService, MovieContent, TvSeriesContent } from '../../services/genre-list/genre-list.service';
import { Subscription } from 'rxjs';
import { BookmarkService } from '../../services/bookmark/bookmark.service';


@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss'],
  host: {
    '[style.width]': '"100%"',
  },
})
export class GenreListComponent implements OnInit {
  @Input() movieContent: MovieContent[] = [];
  @Input() tvContent: TvSeriesContent[] = [];
  id: number | null = null;
  movieId: number | null = null;
  tvId: number | null = null;
  moviename: string = '';
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private genreListService: GenreListService, private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        this.movieId = +params.get('id')!;
        this.fetchMovieByGenre(this.movieId);
      }),

      this.route.paramMap.subscribe(params => {
        this.tvId = +params.get('id')!;

        this.fetchTvSeriesByGenre(this.tvId);
      })
    );
  }

  fetchMovieByGenre(id: number): void {
    const subscription = this.genreListService.getMovieByGenre(id).subscribe((details: any) => {
      this.movieContent = details.results;
    });
    this.subscriptions.push(subscription);
  }

  fetchTvSeriesByGenre(id: number): void {
    const subscription = this.genreListService.getTvSeriesByGenre(id).subscribe((details: any) => {
      this.tvContent = details.results;
    });
    this.subscriptions.push(subscription);
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

  toggleBookmarkTv(tv: TvSeriesContent): void {
    this.bookmarkService.toggleBookmarkTv(tv);
  }

  getYearFromDate(fullDate: string): string {
    const date = new Date(fullDate);
    const year = date.getFullYear();
    return year.toString();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
