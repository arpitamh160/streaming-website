import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviegenreComponent } from './moviegenre.component';

describe('MoviegenreComponent', () => {
  let component: MoviegenreComponent;
  let fixture: ComponentFixture<MoviegenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviegenreComponent]
    });
    fixture = TestBed.createComponent(MoviegenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
