import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService, MovieContent, TvContent } from 'src/app/pages/services/dashboard/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  trendingMovies: MovieContent[] = [];
  popularMovies: MovieContent[] = [];
  trendingTVSeries: TvContent[] = [];
  popularTVSeries: TvContent[] = [];
  subscriptions: Subscription[] = [];

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.service.getTrendingMovies().subscribe({
        next: (data: any) => {
          this.trendingMovies = data.results;
          console.log("trending-movie", this.trendingMovies);
        },
        error: (error: any) => {
          console.error('Error fetching trending movies', error);
        }
      }),

      this.service.getPopularMovies().subscribe({
        next: (data: any) => {
          this.popularMovies = data.results;
          console.log("popular-movie", this.popularMovies);
        },
        error: (error: any) => {
          console.error('Error fetching popular movies', error);
        }
      }),

      this.service.getTrendingTvSeries().subscribe({
        next: (data: any) => {
          this.trendingTVSeries = data.results;
          console.log("trending-tv", this.trendingTVSeries);
        },
        error: (error: any) => {
          console.error('Error fetching trending tv series', error);
        }
      }),

      this.service.getPopularTvSeries().subscribe({
        next: (data: any) => {
          this.popularTVSeries = data.results;
          console.log("popular-tv", this.trendingTVSeries);
        },
        error: (error: any) => {
          console.error('Error fetching popular tv series', error);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}