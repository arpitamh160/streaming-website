import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvDetailsComponent } from '../../components/tv-details/tv-details.component';

const routes: Routes = [
  { path: '',
  component: TvDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvDetailsRoutingModule { }
