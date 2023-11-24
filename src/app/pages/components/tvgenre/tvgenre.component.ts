import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TvGenreService, TvGenre } from '../../services/tv-genre/tv-genre.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tvgenre',
  templateUrl: './tvgenre.component.html',
  styleUrls: ['./tvgenre.component.scss'],
  host: {
    '[style.width]': '"100%"',
  },
})
export class TvgenreComponent implements OnInit, OnDestroy {
  tvgenres: TvGenre[] = [];
  category: string = '';
  tvgenreColors: string[] = ["column-even-tv", "column-odd"];
  private tvGenreSubscription: Subscription = new Subscription();

  constructor(private tvGenreService: TvGenreService, private router: Router) { }

  ngOnInit() {
    this.tvGenreSubscription = this.tvGenreService.fetchTvGenres().subscribe({
      next: (data: any) => {
        this.tvgenres = data.genres;
      },
      error: (error: any) => {
        console.error('Error fetching TV genres:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.tvGenreSubscription.unsubscribe();
  }
}
