import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreListComponent } from '../../components/genre-list/genre-list.component';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';
import { CarouselModule } from 'src/app/shared/modules/carousel/carousel.module';
import { GenreListRoutingModule } from './genre-list-routing.module';


@NgModule({
  declarations: [
    GenreListComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    CarouselModule,
    GenreListRoutingModule
  ]
})

export class GenreListModule { }

