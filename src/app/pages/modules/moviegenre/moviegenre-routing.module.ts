import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviegenreComponent } from '../../components/moviegenre/moviegenre.component';

const routes: Routes = [
  {
    path: '',
    component: MoviegenreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviegenreRoutingModule { }
