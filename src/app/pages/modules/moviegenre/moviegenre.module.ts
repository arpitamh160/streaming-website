import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviegenreRoutingModule } from './moviegenre-routing.module';
import { MoviegenreComponent } from '../../components/moviegenre/moviegenre.component';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';
import { GenreModule } from 'src/app/shared/modules/genre/genre.module';
import { GenreListModule } from '../genre-list/genre-list.module';
import { CarouselModule } from 'src/app/shared/modules/carousel/carousel.module';


@NgModule({
  declarations: [
    MoviegenreComponent
  ],
  imports: [
    CommonModule,
    MoviegenreRoutingModule,
    SearchBarModule,
    GenreModule,
    GenreListModule,
    CarouselModule
  ]
})
export class MoviegenreModule { }
