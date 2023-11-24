import { Component, OnInit } from '@angular/core';
import { SearchService, MediaContent } from '../../services/search/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkService, MovieContent, TvContent } from '../../services/bookmark/bookmark.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  host: {
    '[style.width]': '"100%"',
  },
})
export class SearchComponent implements OnInit {
  movieResults: MediaContent[] = [];
  tvResults: MediaContent[] = [];
  searchQuery: string = '';
  noResults: boolean = false;

  constructor(private searchService: SearchService, private activeRoute: ActivatedRoute, private router: Router, private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.searchQuery = params['query'];
      if (this.searchQuery) {
        this.searchService.searchMedia(this.searchQuery).subscribe((result: any) => {
          if (result && result.results) {
            this.movieResults = result.results.filter((item: MediaContent) => item.media_type === 'movie');
            this.tvResults = result.results.filter((item: MediaContent) => item.media_type === 'tv');
            this.noResults = this.movieResults.length + this.tvResults.length === 0;
            if (this.noResults) {
              this.router.navigate(['home/no-results-found', { search_result: this.searchQuery }]);
            }
          }
        });
      }
    });
  }

  isBookmarkedMovie(movieId: number): boolean {
    const bookmarkedMovies = this.bookmarkService.getBookmarksMovie();
    return bookmarkedMovies.some((movie) => movie.id === movieId);
  }

  isBookmarkedTv(tvId: number): boolean {
    const bookmarkedMovies = this.bookmarkService.getBookmarksTv();
    return bookmarkedMovies.some((tv) => tv.id === tvId);
  }

  toggleBookmarkMovie(movie: MovieContent) {
    this.bookmarkService.toggleBookmarkMovie(movie);
  }

  toggleBookmarkTv(tv: TvContent) {
    this.bookmarkService.toggleBookmarkTv(tv);
  }

  getYearFromDate(fullDate: string): string {
    const date = new Date(fullDate);
    const year = date.getFullYear();
    return year.toString();
  }
}
