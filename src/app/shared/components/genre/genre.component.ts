import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieGenre } from 'src/app/pages/services/movie-genre/movie-genre.service';
import { TvGenre } from 'src/app/pages/services/tv-genre/tv-genre.service';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls:['./genre.component.scss']
})
export class GenreComponent {
  @Input() movie: MovieGenre[] =[];
  @Input() tv: TvGenre[] =[];
  @Input() category: string='';
  @Input() genreColors: string[] = [];


  constructor(private router: Router) {}

}


