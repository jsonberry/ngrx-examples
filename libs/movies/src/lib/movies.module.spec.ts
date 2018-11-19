import { async, TestBed } from '@angular/core/testing';
import { MoviesModule } from './movies.module';

describe('MoviesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MoviesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MoviesModule).toBeDefined();
  });
});
