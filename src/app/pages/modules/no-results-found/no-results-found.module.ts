import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoResultsFoundRoutingModule } from './no-results-found-routing.module';
import { NoResultsFoundComponent } from '../../components/no-results-found/no-results-found.component';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';


@NgModule({
  declarations: [
    NoResultsFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageModule,
    SearchBarModule,
    NoResultsFoundRoutingModule
  ]
})
export class NoResultsFoundModule { }
