import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { MoviesPartialState } from './movies.reducer';
import { moviesQuery } from './movies.selectors';
import { LoadMovies } from './movies.actions';

@Injectable()
export class MoviesFacade {
  loaded$ = this.store.pipe(select(moviesQuery.getLoaded));
  allMovies$ = this.store.pipe(select(moviesQuery.getAllMovies));
  selectedMovies$ = this.store.pipe(select(moviesQuery.getSelectedMovies));

  constructor(private store: Store<MoviesPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadMovies());
  }
}
