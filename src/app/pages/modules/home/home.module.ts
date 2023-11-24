import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MoviegenreModule } from '../moviegenre/moviegenre.module';
import { SideBarModule } from 'src/app/shared/modules/side-bar/side-bar.module';
import { BookmarkModule } from '../bookmark/bookmark.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarModule,
    DashboardModule,
    MoviegenreModule,
    BookmarkModule,
  ]
})
export class HomeModule { }
