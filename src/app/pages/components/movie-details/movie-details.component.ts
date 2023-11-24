import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieDetailsService, MovieContent } from '../../services/movie-details/movie-details.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieId: number | null = null;
  movieDetails!: MovieContent;
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private mediaService: MovieDetailsService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        this.movieId = +params.get('id')!;
        this.fetchMovieDetails(this.movieId);
      })
    );
  }

  fetchMovieDetails(id: number) {
    const subscription = this.mediaService.getMovieDetails(id).subscribe((details: any) => {
      this.movieDetails = details;
      this.subscriptions.push(subscription);
    });
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
