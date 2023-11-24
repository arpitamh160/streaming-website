import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvDetailsRoutingModule } from './tv-details-routing.module';
import { TvDetailsComponent } from '../../components/tv-details/tv-details.component';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';


@NgModule({
  declarations: [
    TvDetailsComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    TvDetailsRoutingModule
  ]
})
export class TvDetailsModule { }
