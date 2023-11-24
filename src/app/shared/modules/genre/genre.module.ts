import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from '../../components/genre/genre.component';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    GenreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    GenreComponent
  ]
})
export class GenreModule { }
