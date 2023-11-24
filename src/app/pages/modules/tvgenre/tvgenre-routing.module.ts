import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvgenreComponent } from '../../components/tvgenre/tvgenre.component';
const routes: Routes = [
  { path: '', component: TvgenreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvgenreRoutingModule { }
