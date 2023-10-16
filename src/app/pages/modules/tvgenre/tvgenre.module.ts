import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvgenreComponent } from '../../components/tvgenre/tvgenre.component';
import { TvgenreRoutingModule } from './tvgenre-routing.module';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';
import { GenreModule } from 'src/app/shared/modules/genre/genre.module';
@NgModule({
  declarations: [
    TvgenreComponent
  ],
  imports: [
    CommonModule,
    TvgenreRoutingModule,
    SearchBarModule,
    GenreModule
  ],
  exports: [
    TvgenreComponent
  ]
})
export class TvgenreModule { }
