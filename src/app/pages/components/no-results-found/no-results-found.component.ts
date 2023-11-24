import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-no-results-found',
  templateUrl: './no-results-found.component.html',
  styleUrls: ['./no-results-found.component.scss'],
  host: {
    '[style.width]': '"100%"',
    '[style.height]': '"100%"'
  },
})
export class NoResultsFoundComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  private subscription: Subscription = new Subscription();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const subscription = this.route.params.subscribe(params => {
      this.searchQuery = params['search_result'];
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
