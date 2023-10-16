import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SearchBarModule } from 'src/app/shared/modules/search-bar/search-bar.module';
import { CarouselModule } from 'src/app/shared/modules/carousel/carousel.module';


@NgModule({
  declarations: [
    DashboardComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SearchBarModule,
    CarouselModule
  ]
})
export class DashboardModule { }

