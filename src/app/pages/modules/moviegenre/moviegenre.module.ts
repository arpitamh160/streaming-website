import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviegenreRoutingModule } from './moviegenre-routing.module';
import { MoviegenreComponent } from '../../components/moviegenre/moviegenre.component';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';
import { GenreModule } from 'src/app/shared/modules/genre/genre.module';


@NgModule({
  declarations: [
    MoviegenreComponent
  ],
  imports: [
    CommonModule,
    MoviegenreRoutingModule,
    SearchBarModule,
    GenreModule,
  ],
  exports:[
    MoviegenreComponent
  ]
})
export class MoviegenreModule { }
