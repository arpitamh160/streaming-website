import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'moviegenre', loadChildren: () => import('../moviegenre/moviegenre.module').then(m => m.MoviegenreModule)},
      { path: 'tvgenre', loadChildren: () => import('../tvgenre/tvgenre.module').then(m => m.TvgenreModule) },
      { path: 'bookmark', loadChildren: () => import('../bookmark/bookmark.module').then(m => m.BookmarkModule) },
      { path: 'genre-list/:category/:id', loadChildren: () => import('../genre-list/genre-list.module').then(m => m.GenreListModule) },
      { path: 'movie-details/:id', loadChildren: () => import('../movie-details/movie-details.module').then(m => m.MovieDetailsModule) },
      { path: 'tv-details/:id', loadChildren: () => import('../tv-details/tv-details.module').then(m => m.TvDetailsModule) },
      { path: 'search/:query', loadChildren: () => import('../search/search.module').then(m => m.SearchModule) },
      { path: 'no-results-found',loadChildren: () => import('../no-results-found/no-results-found.module').then(m => m.NoResultsFoundModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
