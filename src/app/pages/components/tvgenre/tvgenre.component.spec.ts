import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvgenreComponent } from './tvgenre.component';

describe('TvgenreComponent', () => {
  let component: TvgenreComponent;
  let fixture: ComponentFixture<TvgenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvgenreComponent]
    });
    fixture = TestBed.createComponent(TvgenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
