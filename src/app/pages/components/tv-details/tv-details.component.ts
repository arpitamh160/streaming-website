import { Component, OnDestroy } from '@angular/core';
import { TvDetailsService, TvContent } from '../../services/tv-details/tv-details.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnDestroy {
  tvId: number | null = null;
  tvDetails!: TvContent;
  private tvDetailsSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private mediaService: TvDetailsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tvId = +params.get('id')!;
      this.fetchTvDetails(this.tvId);
    });
  }

  fetchTvDetails(id: number) {
    this.tvDetailsSubscription = this.mediaService.getTvDetails(id).subscribe((details: any) => {
      this.tvDetails = details;
      console.log(this.tvDetails);

    });
  }

  getYearFromDate(fullDate: string): string {
    const date = new Date(fullDate);
    const year = date.getFullYear();
    return year.toString();
  }

  ngOnDestroy(): void {
    this.tvDetailsSubscription.unsubscribe();
  }
}
