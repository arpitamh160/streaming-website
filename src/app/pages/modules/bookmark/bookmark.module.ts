import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkComponent } from '../../components/bookmark/bookmark.component';
import { CarouselModule } from 'src/app/shared/modules/carousel/carousel.module';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';

@NgModule({
  declarations: [
    BookmarkComponent
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    CarouselModule,
    SearchBarModule
  ]
})
export class BookmarkModule { }
