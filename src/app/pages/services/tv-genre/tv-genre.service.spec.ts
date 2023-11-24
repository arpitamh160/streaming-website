import { TestBed } from '@angular/core/testing';

import { TvGenreService } from './tv-genre.service';

describe('TvGenreService', () => {
  let service: TvGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
