import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'moviegenre', loadChildren: () => import('../moviegenre/moviegenre.module').then(m => m.MoviegenreModule) },
      { path: 'tvgenre', loadChildren: () => import('../tvgenre/tvgenre.module').then(m => m.TvgenreModule) },
      { path: 'bookmark', loadChildren: () => import('../bookmark/bookmark.module').then(m => m.BookmarkModule) },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
