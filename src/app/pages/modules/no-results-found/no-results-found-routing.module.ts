import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoResultsFoundComponent } from '../../components/no-results-found/no-results-found.component';

const routes: Routes = [
  {
    path: '',
    component: NoResultsFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoResultsFoundRoutingModule { }
