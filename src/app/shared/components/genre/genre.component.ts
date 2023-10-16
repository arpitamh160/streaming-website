import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent {
  movieGenre: string[] = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music"];

  @Output() genreSelected = new EventEmitter<string>();

  filterByGenre(genre: string) {
   
  }
  
}
