import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from '../../components/search/search.component';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
