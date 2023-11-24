import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
