import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { loggedInAuthGuard } from './shared/guards/logged-in-auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('../app/pages/modules/login/login.module').then((m) => m.LoginModule), canActivate: [loggedInAuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('../app/pages/modules/signup/signup.module').then((m) => m.SignupModule), canActivate: [loggedInAuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('../app/pages/modules/home/home.module').then((m) => m.HomeModule), canActivate: [authGuard]
  },
  {
    path: '**',
    loadChildren: () => import('../app/pages/modules/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
