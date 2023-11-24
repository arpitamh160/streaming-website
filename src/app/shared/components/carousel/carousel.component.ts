import { Component, Input, HostListener, OnInit } from '@angular/core';
import { BookmarkService } from 'src/app/pages/services/bookmark/bookmark.service';
import { MovieContent, TvContent } from 'src/app/pages/services/dashboard/dashboard.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  @Input() movieContent: any[] = [];
  @Input() tvContent: any[] = [];
  currentMovieIndex: number = 0;
  currentTvIndex: number = 0;
  itemsPerSlide: number = 3;

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.updateItemsPerSlide();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateItemsPerSlide();
  }

  updateItemsPerSlide() {

    const windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 3;
    }

    this.currentMovieIndex = 0;
    this.currentTvIndex = 0;
  }

  nextMovie() {
    if (this.currentMovieIndex < (this.movieContent.length - this.itemsPerSlide)) {
      this.currentMovieIndex++;
    }
  }

  previousMovie() {
    if (this.currentMovieIndex > 0) {
      this.currentMovieIndex--;
    }
  }

  nextTv() {
    if (this.currentTvIndex < (this.tvContent.length - this.itemsPerSlide)) {
      this.currentTvIndex++;
    }
  }

  previousTv() {
    if (this.currentTvIndex > 0) {
      this.currentTvIndex--;
    }
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
