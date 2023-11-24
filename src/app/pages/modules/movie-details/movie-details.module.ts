import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { SearchBarModule } from '../../../shared/modules/search-bar/search-bar.module';


@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    SearchBarModule
  ]
})
export class MovieDetailsModule { }
